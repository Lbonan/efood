class Restaurant {
  image: string
  title: string
  infos: string[]
  rate: string
  description: string
  id: number

  constructor(
    image: string,
    title: string,
    infos: string[],
    rate: string,
    description: string,
    id: number
  ){
    this.image = image
    this.title = title
    this.infos = infos
    this.rate = rate
    this.description = description
    this.id = id
  }
}

export default Restaurant
