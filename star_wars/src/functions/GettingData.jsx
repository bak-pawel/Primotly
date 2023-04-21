export const getUsers =(url,setData)=>(
    fetch(url)
    .then(res => res.json())
    .then(data => setData(data))
)

export const getHomeworldData =(dataIn, setData)=>{
    let listWithURLS = []
    dataIn.results.forEach(element=>{
      if(!listWithURLS.includes(element.homeworld)){
        listWithURLS.push(element.homeworld)
      }
    })
    Promise.all(listWithURLS.map(url => 
        fetch(url).then(resp => resp.json())
      ))
      .then(data =>setData(data))
}