// code jQuery

        $(document).ready(function () {
            //Votre code jQuery ici
            alert("Voudriez-vous effectuez une action ? 🌎");
            $("#sentence").css("color", "green");
            $("#css").click(function () {
                $("#sentence").css("color", "blue");
            });

            $("#html").click(function () {
                $("#sentence").text("Hello World 😊😎!")
                .css("font-style", "italic");
            });

            $("#toggle").click(function () {
                $("#sentence").toggle(3000);
            });
            
            $("#stop").click(function () {
                $("#sentence").stop();
            });

            $("#slide").click(function () {
                $("#sentence").slideToggle("slow");
            });
        });

