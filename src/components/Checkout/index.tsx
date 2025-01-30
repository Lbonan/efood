const Checkout = () => (
  <form>
    <div>
      <h2>Entrega</h2>
      <div>
        <label htmlFor="sender">Quem vai receber *</label>
        <input type="text" name="sender" id="sender" />
      </div>
      <div>
        <label htmlFor="address">Endereço*</label>
        <input type="text" name="address" id="address" />
      </div>
      <div>
        <label htmlFor="city">Cidade*</label>
        <input type="text" name="city" id="city" />
      </div>
      <div className="">
        <div>
          <label htmlFor="cep">CEP*</label>
          <input type="text" name="cep" id="cep" />
        </div>
        <div>
          <label htmlFor="number">Número*</label>
          <input type="number" name="number" id="number" />
        </div>
      </div>
      <div>
        <label htmlFor="complement">Complemento (opcional)</label>
        <input type="text" name="complement" id="complement" />
      </div>
    </div>
  </form>
)

export default Checkout
