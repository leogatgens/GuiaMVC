

$(document).ready(function () {


    $("#btnAddToCart").click(function () {
        try {

    

        var listaStudents = [];

        var Student = {
            ID: '10001',
            Name: 'Shashangka',
            Age: 31
        };
      

   
        var Student1 = {
            ID: '10001',
            Name: 'Shashangka',
            Age: 31
        };
        var Student2 = {
            ID: '10001',
            Name: 'Shashangka',
            Age: 31
        };
        listaStudents.push(Student);
        listaStudents.push(Student1);
        listaStudents.push(Student2);

        $.ajax({
            type: "POST",
            url: "/HelloWorld/JqAJAX",
            data: JSON.stringify(Student),
            dataType: "text json",
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
                alert(data.msg);
            },
            error: function () {
                alert("Error occured!!");
            }
        });
        $.ajax({
            type: "POST",
            url: "/HelloWorld/AgregaListaPersonas",
            data: JSON.stringify(listaStudents),
            dataType: "text json",
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
                alert(data.msg);
            },
            error: function () {
                alert("Error occured!!");
            }
        });



        $.ajax({
         
            url: "/HelloWorld/AgregaListaPersonas",
            cache: false,
            async: false,
            type: "POST",
            dataType: "text json",
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(listaStudents),                    
            success: function (data) {
                alert(data.msg);
            },
            error: function () {
                alert("Error occured!!");
            }
        });

        var datosEnJson = {
            "personas": [
                {
                    ID: '10001',
                    Name: 'Shashangka',
                    Age: 31
                },
                {
                    ID: '10001',
                    Name: 'Leo',
                    Age: 45
                },
                {
                    ID: '10001',
                    Name: 'Martin',
                    Age: 47
                },
                {
                    ID: '10001',
                    Name: 'Juan',
                    Age: 47
                }
            ]

        }
        $.ajax({

            url: "/HelloWorld/AgregaListaPersonas",
            cache: false,
            async: false,
            type: "POST",
            dataType: "text json",
            contentType: 'application/json; charset=utf-8',
            data: datosEnJson,
            success: function (data) {
                alert(data.msg);
            },
            error: function (error) {
                alert("Error occured!!" + error);
            }
        });


        } catch (e) {
            console.log(e.message);
        }
        
    });
});

