import axios from "axios";

class Service{
    

    getPlanets()
    {
        return axios.get('https://findfalcone.geektrust.com/planets')
    }
    getVehicles()
    {
        return axios.get('https://findfalcone.geektrust.com/vehicles')
    }
    getToken()
    {      
        return axios.post('https://findfalcone.geektrust.com/token', {},{ headers:{
            'accept' :'application/json'
         }})
    }
    Result(planets,vehicles,tokens)
        {
            
            let data={
             'token':tokens,
             'planet_names':planets,
             'vehicle_names':vehicles
            }
            let axiosConfig = {
                headers: {
                    'accept' :'application/json',
                    'Content-Type': 'application/json'
                 
                }
              }
             
        return axios.post('https://findfalcone.geektrust.com/find',data,axiosConfig)
    }

}
export default new Service();