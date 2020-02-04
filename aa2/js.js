$('form').on('submit', function(e) {
    // validation code here
    e.preventDefault();
    $form = $(this).parent('form');
    $btnid = $(this).attr('name');
    $btnval = $(this).attr('value');

    let dataaj;
    $.ajax({
        url: 'http://aa/api/api.php?order_id=' + document.getElementById('vvel').value,
        type: 'GET',
        data: {
            "btnid": $btnid,
            "btnval": $btnval,
            "form-data": $form.serialize()
        },
        success: function(html) {
            console.log(html);
            dataaj = html['adress'];
        }
    });


});



//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Initialize and add the map


setTimeout(() => {

}, 1000);

let lat1;
let lng1;



function initMap() {

    function CallAboutClickedHouse(e) {
        let adressnow;
        let p1;
        let p2;
        let p3;
        $.ajax({
            url: 'http://aa/api/api.php?getall=' + e,
            type: 'GET',
            //////////////////////////////////////////////////////////////////////
            success: function(html) {
                adressnow = html['adress'];
                p1 = html['pic1'];
                p2 = html['pic2'];
                p3 = html['pic3'];
                reactshshs(adressnow, p1, p2, p3,html['kvadr'],html['cena'],html['komnat']);
            },
            error: function(request, status, error) {
                alert(request.responseText);
            }

        });




    }




    let markers = [];
    setTimeout(() => {


        let isthere = 0;
        let kolvonedvizh = 1;
        let adressaaa;

        function nextned() {
            // body...

            $.ajax({
                url: 'http://aa/api/api.php?getall=' + kolvonedvizh,
                type: 'GET',
                //////////////////////////////////////////////////////////////////////
                success: function(html) {
                    lat1 = html['lat'];
                    adressaaa = html['adress'] + '';
                    lng1 = html['lng'];
                    isthere = html['order_id'];
                    alert(isthere);
                    if (isthere != null) {
                        nextned();
                    }

                    var marker = new google.maps.Marker({
                        position: { lat: parseFloat(lat1), lng: parseFloat(lng1) },
                        map: map,
                        title: adressaaa,
                        icon: './home-address.png'
                    });
                    marker.set("id", kolvonedvizh - 2);


                    marker.addListener('click', function() {

                        map.setZoom(15);
                        CallAboutClickedHouse(this.get("id"));
                        map.setCenter(marker.getPosition());

                    });


                },

                ////////////////
                error: function(request, status, error) {
                    alert(request.responseText);
                }

            });
            kolvonedvizh++;
        }
        nextned();



    }, 1000);





    // The location of Uluru
    var uluru = { lat: 42.330117, lng: 69.5773364 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 13, center: uluru });
    // The marker, positioned at Uluru

google.maps.Map.prototype.markers = new Array();

google.maps.Map.prototype.getMarkers = function() {
    return this.markers
};

google.maps.Map.prototype.clearMarkers = function() {
    for(var i=0; i<this.markers.length; i++){
        this.markers[i].setMap(null);
    }
    this.markers = new Array();
};

google.maps.Marker.prototype._setMap = google.maps.Marker.prototype.setMap;

google.maps.Marker.prototype.setMap = function(map) {
    if (map) {
        map.markers[map.markers.length] = this;
    }
    this._setMap(map);
}


  $('.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 2
      }
    }
  });

}

