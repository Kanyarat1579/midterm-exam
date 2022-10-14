document.addEventListener('DOMContentLoaded',function (){
                document.querySelector('.a').onsubmit = function (){
                    const sensortp = document.querySelector('#sensor_id').value;
                    const sensorty = document.querySelector('#sensor_type').value;
                   
                       

     if( sensorty=="flow-transducer"){
        if(sensortp==0)
        {          
             fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=flow-transducer')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const currency = document.querySelector('#sensor_id').value;
                const flowname = data[0].name;
                const flowplant = data[0]["plant-site"];
                const flowrange = data[0].range;
                const flowtype = data[0].type;
                const flowunit = data[0].unit;
                const flowvalue = data[0].value;
                    document.querySelector('p5').innerHTML = `name : ${flowname}`;
                    document.querySelector('p6').innerHTML = `plant-site : ${flowplant}`;
                    document.querySelector('p7').innerHTML = `range : ${flowrange}`;
                    document.querySelector('p8').innerHTML = `type : ${flowtype}`;
                    document.querySelector('p9').innerHTML = `unit : ${flowunit}`;
                    document.querySelector('p10').innerHTML = `value : ${flowvalue}`;
                  
            })
            .catch(error => {
                console.log('Error:', error);
            });

            return false;
        }

        if(sensortp==1)
        {          
            fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=flow-transducer')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const currency = document.querySelector('#sensor_id').value;
                const flowname = data[1].name;
                const flowplant = data[1]["plant-site"];
                const flowrange = data[1].range;
                const flowtype = data[1].type;
                const flowunit = data[1].unit;
                const flowvalue = data[1].value;
                    document.querySelector('p5').innerHTML = `name : ${flowname}`;
                    document.querySelector('p6').innerHTML = `plant-site : ${flowplant}`;
                    document.querySelector('p7').innerHTML = `range : ${flowrange}`;
                    document.querySelector('p8').innerHTML = `type : ${flowtype}`;
                    document.querySelector('p9').innerHTML = `unit : ${flowunit}`;
                    document.querySelector('p10').innerHTML = `value : ${flowvalue}`;
     
            })
            .catch(error => {
                console.log('Error:', error);
            });

            return false;
       }

       if(sensortp==2)
       {          
        fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=flow-transducer')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const currency = document.querySelector('#sensor_id').value;
            const flowname = data[2].name;
            const flowplant = data[2]["plant-site"];
            const flowrange = data[2].range;
            const flowtype = data[2].type;
            const flowunit = data[2].unit;
            const flowvalue = data[2].value;
                document.querySelector('p5').innerHTML = `name : ${flowname}`;
                document.querySelector('p6').innerHTML = `plant-site : ${flowplant}`;
                document.querySelector('p7').innerHTML = `range : ${flowrange}`;
                document.querySelector('p8').innerHTML = `type : ${flowtype}`;
                document.querySelector('p9').innerHTML = `unit : ${flowunit}`;
                document.querySelector('p10').innerHTML = `value : ${flowvalue}`;
 
        })
        .catch(error => {
            console.log('Error:', error);
        });

        return false;
      }

      
    }


if ( sensorty=="temperature-transducer")
{
      if(sensortp==0)
      {          
        fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=temperature-transducer')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const currency = document.querySelector('#sensor_id').value;
            const tempname = data[0].name;
            const tempplant = data[0]["plant-site"];
            const temprange = data[0].range;
            const temptype = data[0].type;
            const tempunit = data[0].unit;
            const tempvalue = data[0].value;
                document.querySelector('p5').innerHTML = `name : ${tempname}`;
                document.querySelector('p6').innerHTML = `plant-site : ${tempplant}`;
                document.querySelector('p7').innerHTML = `range : ${temprange}`;
                document.querySelector('p8').innerHTML = `type : ${temptype}`;
                document.querySelector('p9').innerHTML = `unit : ${tempunit}`;
                document.querySelector('p10').innerHTML = `value : ${tempvalue}`;
 
        })
        .catch(error => {
            console.log('Error:', error);
        });

        return false;
      }

      if(sensortp==1)
      {          
        fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=temperature-transducer')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const currency = document.querySelector('#sensor_id').value;
            const tempname = data[1].name;
            const tempplant = data[1]["plant-site"];
            const temprange = data[1].range;
            const temptype = data[1].type;
            const tempunit = data[1].unit;
            const tempvalue = data[1].value;
                document.querySelector('p5').innerHTML = `name : ${tempname}`;
                document.querySelector('p6').innerHTML = `plant-site : ${tempplant}`;
                document.querySelector('p7').innerHTML = `range : ${temprange}`;
                document.querySelector('p8').innerHTML = `type : ${temptype}`;
                document.querySelector('p9').innerHTML = `unit : ${tempunit}`;
                document.querySelector('p10').innerHTML = `value : ${tempvalue}`;
 
        })
        .catch(error => {
            console.log('Error:', error);
        });

        return false;
      }

      if(sensortp==2)
      {          
        fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=temperature-transducer')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const currency = document.querySelector('#sensor_id').value;
            const tempname = data[2].name;
            const tempplant = data[2]["plant-site"];
            const temprange = data[2].range;
            const temptype = data[2].type;
            const tempunit = data[2].unit;
            const tempvalue = data[2].value;
                document.querySelector('p5').innerHTML = `name : ${tempname}`;
                document.querySelector('p6').innerHTML = `plant-site : ${tempplant}`;
                document.querySelector('p7').innerHTML = `range : ${temprange}`;
                document.querySelector('p8').innerHTML = `type : ${temptype}`;
                document.querySelector('p9').innerHTML = `unit : ${tempunit}`;
                document.querySelector('p10').innerHTML = `value : ${tempvalue}`;
 
        })
        .catch(error => {
            console.log('Error:', error);
        });

        return false;
      }

}   

if ( sensorty=="pressure-transducer")
{
      if(sensortp==0)
      {          
        fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=pressure-transducer')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const currency = document.querySelector('#sensor_id').value;
            const pressurename = data[0].name;
            const pressureplant = data[0]["plant-site"];
            const pressurerange = data[0].range;
            const pressuretype = data[0].type;
            const pressureunit = data[0].unit;
            const pressurevalue = data[0].value;
                document.querySelector('p5').innerHTML = `name : ${pressurename}`;
                document.querySelector('p6').innerHTML = `plant-site : ${pressureplant}`;
                document.querySelector('p7').innerHTML = `range : ${pressurerange}`;
                document.querySelector('p8').innerHTML = `type : ${pressuretype}`;
                document.querySelector('p9').innerHTML = `unit : ${pressureunit}`;
                document.querySelector('p10').innerHTML = `value : ${pressurevalue}`;
 
        })
        .catch(error => {
            console.log('Error:', error);
        });

        return false;
      }

      if(sensortp==1)
      {          
        fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=pressure-transducer')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const currency = document.querySelector('#sensor_id').value;
            const pressurename = data[1].name;
            const pressureplant = data[1]["plant-site"];
            const pressurerange = data[1].range;
            const pressuretype = data[1].type;
            const pressureunit = data[1].unit;
            const pressurevalue = data[1].value;
                document.querySelector('p5').innerHTML = `name : ${pressurename}`;
                document.querySelector('p6').innerHTML = `plant-site : ${pressureplant}`;
                document.querySelector('p7').innerHTML = `range : ${pressurerange}`;
                document.querySelector('p8').innerHTML = `type : ${pressuretype}`;
                document.querySelector('p9').innerHTML = `unit : ${pressureunit}`;
                document.querySelector('p10').innerHTML = `value : ${pressurevalue}`;
 
        })
        .catch(error => {
            console.log('Error:', error);
        });

        return false;
      }

      if(sensortp==2)
      {          
        fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=pressure-transducer')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const currency = document.querySelector('#sensor_id').value;
            const pressurename = data[2].name;
            const pressureplant = data[2]["plant-site"];
            const pressurerange = data[2].range;
            const pressuretype = data[2].type;
            const pressureunit = data[2].unit;
            const pressurevalue = data[2].value;
                document.querySelector('p5').innerHTML = `name : ${pressurename}`;
                document.querySelector('p6').innerHTML = `plant-site : ${pressureplant}`;
                document.querySelector('p7').innerHTML = `range : ${pressurerange}`;
                document.querySelector('p8').innerHTML = `type : ${pressuretype}`;
                document.querySelector('p9').innerHTML = `unit : ${pressureunit}`;
                document.querySelector('p10').innerHTML = `value : ${pressurevalue}`;
 
        })
        .catch(error => {
            console.log('Error:', error);
        });

        return false;
      }

} 

if ( sensorty=="level-transducer")
{
      if(sensortp==0)
      {          
        fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=level-transducer')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const currency = document.querySelector('#sensor_id').value;
            const levelname = data[0].name;
            const levelplant = data[0]["plant-site"];
            const levelrange = data[0].range;
            const leveltype = data[0].type;
            const levelunit = data[0].unit;
            const levelvalue = data[0].value;
                document.querySelector('p5').innerHTML = `name : ${levelname}`;
                document.querySelector('p6').innerHTML = `plant-site : ${levelplant}`;
                document.querySelector('p7').innerHTML = `range : ${levelrange}`;
                document.querySelector('p8').innerHTML = `type : ${leveltype}`;
                document.querySelector('p9').innerHTML = `unit : ${levelunit}`;
                document.querySelector('p10').innerHTML = `value : ${levelvalue}`;
 
        })
        .catch(error => {
            console.log('Error:', error);
        });

        return false;
      }

      if(sensortp==1)
      {          
        fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=level-transducer')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const currency = document.querySelector('#sensor_id').value;
            const levelname = data[1].name;
            const levelplant = data[1]["plant-site"];
            const levelrange = data[1].range;
            const leveltype = data[1].type;
            const levelunit = data[1].unit;
            const levelvalue = data[1].value;
                document.querySelector('p5').innerHTML = `name : ${levelname}`;
                document.querySelector('p6').innerHTML = `plant-site : ${levelplant}`;
                document.querySelector('p7').innerHTML = `range : ${levelrange}`;
                document.querySelector('p8').innerHTML = `type : ${leveltype}`;
                document.querySelector('p9').innerHTML = `unit : ${levelunit}`;
                document.querySelector('p10').innerHTML = `value : ${levelvalue}`;
 
        })
        .catch(error => {
            console.log('Error:', error);
        });

        return false;
      }

      if(sensortp==2)
      {          
        fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=level-transducer')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const currency = document.querySelector('#sensor_id').value;
            const levelname = data[2].name;
            const levelplant = data[2]["plant-site"];
            const levelrange = data[2].range;
            const leveltype = data[2].type;
            const levelunit = data[2].unit;
            const levelvalue = data[2].value;
                document.querySelector('p5').innerHTML = `name : ${levelname}`;
                document.querySelector('p6').innerHTML = `plant-site : ${levelplant}`;
                document.querySelector('p7').innerHTML = `range : ${levelrange}`;
                document.querySelector('p8').innerHTML = `type : ${leveltype}`;
                document.querySelector('p9').innerHTML = `unit : ${levelunit}`;
                document.querySelector('p10').innerHTML = `value : ${levelvalue}`;
 
        })
        .catch(error => {
            console.log('Error:', error);
        });

        return false;
      }

} 

        else{
                document.querySelector('#Error').innerHTML = `error` ;
            }

        }
});

    

  

