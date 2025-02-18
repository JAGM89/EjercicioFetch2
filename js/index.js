fetch("https://api.escuelajs.co/api/v1/categories")
.then(res=>res.json())
.then (data=>{
    let tabla="";

    data.forEach(user => {
            tabla+=`
            <tr>
                <td>${user.name}</td>
                <td><img src="${user.image}" alt="Foto de ${user.name}" class="rounded-circle" width="50" referrerpolicy="no-referrer"></td>
            </tr>`
    });
    document.getElementById("tblUsers").innerHTML=tabla
   
})
.catch(error=>console.error('error al tomar los datos: ',error));
