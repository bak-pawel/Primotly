export const getUsers =(url,setData)=>(
    fetch(url)
    .then(res => res.json())
    .then(data => setData(data))
)

export const getHomeworldData =(dataIn, setData)=>{
    let listWithURLS = []
    dataIn.forEach(element=>{
      if(!listWithURLS.includes(element.homeworld)){
        listWithURLS.push(element.homeworld)
      }
    })
    Promise.all(listWithURLS.map(url => 
        fetch(url).then(resp => resp.json())
      ))
      .then(data =>setData(data))
}

export const getFilmData = (dataIn, setData)=>{
  Promise.all(dataIn.map(url => 
      fetch(url).then(resp => resp.json())
    ))
    .then(data =>setData(data))
}