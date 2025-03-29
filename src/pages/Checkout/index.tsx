import { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Navigate } from 'react-router-dom'
import InputMask from 'react-input-mask'
import { ClipLoader } from 'react-spinners'

import {
  Field,
  DeliveryContainer,
  PaymentContainer,
  ConfirmedContainer
} from './styles'
import { CartButton, color } from '../../styles'
import { usePurchaseMutation } from '../../services/api'

import { currencyBrl, getTotalPrice } from '../../utils'
import { open, clear } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Checkout = ({ onClose }: { onClose: () => void }) => {
  const [payWith, setPayWith] = useState(false)
  const [isOpenCart, setIsOpenCart] = useState(false)

  const navigate = useNavigate()

  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      sender: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
      cardOwner: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: ''
    },
    validationSchema: Yup.object({
      sender: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      cep: Yup.string()
        .length(10, 'O campo precisa ter 10 catacteres')
        .required('O campo é obrigatório'),
      number: Yup.string().required('O campo é obrigatório'),
      complement: Yup.string(),

      cardOwner: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .when((values, schema) =>
          payWith ? schema.required('O campo é obrigatório') : schema
        ),
      cardNumber: Yup.string().when((values, schema) =>
        payWith ? schema.required('O campo é obrigatório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        payWith ? schema.required('O campo é obrigatório') : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        payWith ? schema.required('O campo é obrigatório') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        payWith ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.sender,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const validateDelivery = async () => {
    const errors = await form.validateForm()
    const deliveryErrors =
      !errors.sender &&
      !errors.address &&
      !errors.city &&
      !errors.cep &&
      !errors.number

    if (deliveryErrors) {
      setPayWith(true)
    } else {
      form.setTouched({
        sender: true,
        address: true,
        city: true,
        cep: true,
        number: true
      })
    }
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  if (items.length === 0 && !isSuccess) {
    return <Navigate to="/" />
  }

  const openCart = () => {
    dispatch(open())
  }

  const handleConclude = () => {
    setIsOpenCart(true)
    onClose()
    navigate('/')
  }

  const handleVoltar = () => {
    setIsOpenCart(true)
    onClose()
    openCart()
  }

  return (
    <div>
      {isSuccess && data ? (
        <ConfirmedContainer>
          <h2>Pedido realizado - {data.orderId}</h2>
          <p>
            {' '}
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <br />
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <br />
          <p>
            {' '}
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <div className="buttomContainer">
            <CartButton
              type="button"
              title="concluir compra"
              onClick={handleConclude}
            >
              Concluir
            </CartButton>
          </div>
        </ConfirmedContainer>
      ) : !payWith ? (
        <>
          <form onSubmit={form.handleSubmit}>
            <DeliveryContainer>
              <h2>Entrega</h2>
              <Field>
                <label htmlFor="sender">Quem vai receber?*</label>
                <input
                  type="text"
                  name="sender"
                  id="sender"
                  value={form.values.sender}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('sender') ? 'error' : ''}
                />
              </Field>
              <Field>
                <label htmlFor="address">Endereço*</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('address') ? 'error' : ''}
                />
              </Field>
              <Field>
                <label htmlFor="city">Cidade*</label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('city') ? 'error' : ''}
                />
              </Field>
              <div className="CepAndNumber">
                <Field>
                  <label htmlFor="cep">CEP*</label>
                  <InputMask
                    type="text"
                    name="cep"
                    id="cep"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cep') ? 'error' : ''}
                    mask="99.999-999"
                  />
                </Field>
                <Field>
                  <label htmlFor="number">Número*</label>
                  <input
                    type="number"
                    name="number"
                    id="number"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('number') ? 'error' : ''}
                  />
                </Field>
              </div>
              <Field>
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                  type="text"
                  name="complement"
                  id="complement"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </Field>
              <div className="buttomContainer">
                <CartButton
                  type="button"
                  title="Continuar com o pagamento"
                  onClick={validateDelivery}
                >
                  {isLoading ? (
                    <>
                      <ClipLoader size={16} color={color.principal} />
                    </>
                  ) : (
                    'Continuar o pagamento'
                  )}
                </CartButton>
                <CartButton
                  type="button"
                  title="voltar ao carrinho"
                  onClick={handleVoltar}
                >
                  Voltar ao carrinho
                </CartButton>
              </div>
            </DeliveryContainer>
          </form>
        </>
      ) : (
        <>
          <form onSubmit={form.handleSubmit}>
            <PaymentContainer>
              <p>
                Pagamento - valor a pagar {currencyBrl(getTotalPrice(items))}
              </p>
              <Field>
                <label htmlFor="cardOwner">Nome do cartão*</label>
                <input
                  type="text"
                  name="cardOwner"
                  id="cardOwner"
                  value={form.values.cardOwner}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cardOwner') ? 'error' : ''}
                />
              </Field>
              <div className="fieldContainer">
                <Field>
                  <label htmlFor="cardNumber">Número do cartão*</label>
                  <InputMask
                    type="text"
                    name="cardNumber"
                    id="cardNumber"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardNumber') ? 'error' : ''}
                    mask="9999 9999 9999 9999"
                  />
                </Field>
                <Field>
                  <label htmlFor="cardCode">CVV*</label>
                  <InputMask
                    type="text"
                    name="cardCode"
                    id="cardCode"
                    value={form.values.cardCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardCode') ? 'error' : ''}
                    mask="999"
                    maxLength={3}
                    pattern="\d{1,3}"
                  />
                </Field>
              </div>
              <div className="fieldContainer">
                <Field>
                  <label htmlFor="expiresMonth">Mês de vencimento*</label>
                  <InputMask
                    type="text"
                    name="expiresMonth"
                    id="expiresMonth"
                    value={form.values.expiresMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('expiresMonth') ? 'error' : ''
                    }
                    mask="99"
                  />
                </Field>
                <Field>
                  <label htmlFor="expiresYear">Ano de vencimento*</label>
                  <InputMask
                    type="text"
                    name="expiresYear"
                    id="expiresYear"
                    value={form.values.expiresYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('expiresYear') ? 'error' : ''}
                    mask="9999"
                  />
                </Field>
              </div>

              <div className="buttomContainer">
                <CartButton type="submit" title="Finalizar a compra">
                  {isLoading ? (
                    <>
                      <ClipLoader size={16} color={color.principal} />
                    </>
                  ) : (
                    'Finalizar compra'
                  )}
                </CartButton>
                <CartButton type="button" title="voltar" onClick={handleVoltar}>
                  Voltar para edição de endereço
                </CartButton>
              </div>
            </PaymentContainer>
          </form>
        </>
      )}
    </div>
  )
}

export default Checkout
