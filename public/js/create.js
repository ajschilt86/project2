$(document).ready(function () {

    //for the modal and its manipulation
    var modal = $(".modal");
    var modalTitle = $(".modal-title");
    var modalText = $(".modal-body");

    //arrays
    var planeArray = [];
    var playerChoice = [];

    //This is the image list for the respective
    var planeImgList = [
        '/img/su-35.jpg',
        '/img/stealth-fighter.jpg',
        '/img/Ffifteen.jpg',
        '/img/f-22.jpg',
        '/img/su-57.jpg',
        '/img/mig35.jpg',
        '/img/su27.jpg',
        '/img/s400.jpg',
        '/img/Patriot.jpg',
        '/img/godGundum.jpg',
        '/img/devilgundam.png',
        '/img/sr71.jpg',
        '/img/deathstar.jpg'
    ];

    //This be the planes, hi jacob and sam
    var planes = [
        {
            'UID': 1,
            'name': 'Su-35 Flanker-E',
            'img': '/img/su-35.jpg',
            'hp': '100',
            'attack': '10',
            'crit': '35%',
            'evasion': '35%'
        },
        {
            'UID': 2,
            'name': 'F-117 Nighthawk',
            'img': '/img/stealth-fighter.jpg',
            'hp': '100',
            'attack': '5',
            'crit': '15%',
            'evasion': '80%'
        },
        {
            'UID': 3,
            'name': 'F-15 Eagle',
            'img': '/img/f-15.jpg',
            'hp': '100',
            'attack': '12',
            'crit': '40%',
            'evasion': '30%'
        },
        {
            'UID': 4,
            'name': 'F-22 Raptor',
            'img': '/img/f-22.jpg',
            'hp': '100',
            'attack': '15',
            'crit': '15%',
            'evasion': '90%'
        },
        {
            'UID': 5,
            'name': 'Su-57 PAK FA',
            'img': '/img/su-57.jpg',
            'hp': '100',
            'attack': '13',
            'crit': '25%',
            'evasion': '85%'
        },
        {
            'UID': 6,
            'name': 'Mig-35 Fulcrum',
            'img': '/img/mig35.jpg',
            'hp': '100',
            'attack': '10',
            'crit': '35%',
            'evasion': '45%'
        },
        {
            'UID': 7,
            'name': 'Su-27 Flanker',
            'img': '/img/su27.jpg',
            'hp': '100',
            'attack': '8',
            'crit': '10%',
            'evasion': '30%'
        },
        {
            'UID': 8,
            'name': 'S-400 Triumph',
            'img': '/img/s400.jpg',
            'hp': '40',
            'attack': '32',
            'crit': '80%',
            'evasion': '15%'
        },
        {
            'UID': 9,
            'name': 'MIM-104 Patriot',
            'img': '/img/Patriot.jpg',
            'hp': '35',
            'attack': '35',
            'crit': '85%',
            'evasion': '5%'
        },
        {
            'UID': 10,
            'name': 'GF13-017NJII God Gundam',
            'img': '/img/godGundum.jpg',
            'hp': '500',
            'attack': '85',
            'crit': '35%',
            'evasion': '75%'
        },
        {
            'UID': 11,
            'name': 'JDG-00X Devil Gundam',
            'img': '/img/DevilGundam_profile.png',
            'hp': '666',
            'attack': '205',
            'crit': '5%',
            'evasion': '55%'
        },
        {
            'UID': 12,
            'name': 'SR-71 Blackbird',
            'img': '/img/sr71.jpg',
            'hp': '200',
            'attack': '5',
            'crit': '5%',
            'evasion': '90%'
        },
        {
            'UID': 13,
            'name': 'Death Star',
            'img': '/img/deathstar.jpg',
            'hp': '10000',
            'attack': '75',
            'crit': '10%',
            'evasion': '0%'
        }
    ];

    //Pushes all the planes to the plane array
    planes.forEach((element) => {
        planeArray.push(element.name);
    });

    //For each item in the plane array, make a select option
    $.each(planeArray, (val, text) => {
        var planeNumber = 0;
        $('.plane--selector').append($(`<option class=${planeNumber++}~></option>`).val(val).html(text));
    });

    //If a plane is changed, update relevent data
    $('#plane1').change(function () {
        var val = parseInt($('#plane1').val());
        $('#squad-photo-1').attr('src', planeImgList[val]);

        $('#plane--name--1').text(`Name: ${planes[val].name}`);
        $('#plane--hp--1').text(`HP: ${planes[val].hp}`);
        $('#plane--attack--1').text(`Attack: ${planes[val].attack}`);
        $('#plane--crit--1').text(`Crit: ${planes[val].crit}`);
        $('#plane--eva--1').text(`Evasion: ${planes[val].evasion}`);
    });

    $('#plane2').change(function () {
        var val = parseInt($('#plane2').val());
        $('#squad-photo-2').attr('src', planeImgList[val]);

        $('#plane--name--2').text(`Name: ${planes[val].name}`);
        $('#plane--hp--2').text(`HP: ${planes[val].hp}`);
        $('#plane--attack--2').text(`Attack: ${planes[val].attack}`);
        $('#plane--crit--2').text(`Crit: ${planes[val].crit}`);
        $('#plane--eva--2').text(`Evasion: ${planes[val].evasion}`);
    });

    $('#plane3').change(function () {
        var val = parseInt($('#plane3').val());
        $('#squad-photo-3').attr('src', planeImgList[val]);

        $('#plane--name--3').text(`Name: ${planes[val].name}`);
        $('#plane--hp--3').text(`HP: ${planes[val].hp}`);
        $('#plane--attack--3').text(`Attack: ${planes[val].attack}`);
        $('#plane--crit--3').text(`Crit: ${planes[val].crit}`);
        $('#plane--eva--3').text(`Evasion: ${planes[val].evasion}`);
    });

    $('#plane4').change(function () {
        var val = parseInt($('#plane4').val());
        $('#squad-photo-4').attr('src', planeImgList[val]);

        $('#plane--name--4').text(`Name: ${planes[val].name}`);
        $('#plane--hp--4').text(`HP: ${planes[val].hp}`);
        $('#plane--attack--4').text(`Attack: ${planes[val].attack}`);
        $('#plane--crit--4').text(`Crit: ${planes[val].crit}`);
        $('#plane--eva--4').text(`Evasion:  ${planes[val].evasion}`);
    });

    $('#plane5').change(function () {
        var val = parseInt($('#plane5').val());
        $('#squad-photo-5').attr('src', planeImgList[val]);

        $('#plane--name--5').text(`Name: ${planes[val].name}`);
        $('#plane--hp--5').text(`HP: ${planes[val].hp}`);
        $('#plane--attack--5').text(`Attack: ${planes[val].attack}`);
        $('#plane--crit--5').text(`Crit: ${planes[val].crit}`);
        $('#plane--eva--5').text(`Evasion:  ${planes[val].evasion}`);
    });

    $('#plane6').change(function () {
        var val = parseInt($('#plane6').val());
        $('#squad-photo-6').attr('src', planeImgList[val]);

        $('#plane--name--6').text(`Name: ${planes[val].name}`);
        $('#plane--hp--6').text(`HP: ${planes[val].hp}`);
        $('#plane--attack--6').text(`Attack: ${planes[val].attack}`);
        $('#plane--crit--6').text(`Crit: ${planes[val].crit}`);
        $('#plane--eva--6').text(`Evasion:  ${planes[val].evasion}`);
    });

    $('#plane7').change(function () {
        var val = parseInt($('#plane7').val());
        $('#squad-photo-7').attr('src', planeImgList[val]);

        $('#plane--name--7').text(`Name: ${planes[val].name}`);
        $('#plane--hp--7').text(`HP: ${planes[val].hp}`);
        $('#plane--attack--7').text(`Attack: ${planes[val].attack}`);
        $('#plane--crit--7').text(`Crit: ${planes[val].crit}`);
        $('#plane--eva--7').text(`Evasion:  ${planes[val].evasion}`);
    });

    $('#plane8').change(function () {
        var val = parseInt($('#plane8').val());
        $('#squad-photo-8').attr('src', planeImgList[val]);

        $('#plane--name--8').text(`Name: ${planes[val].name}`);
        $('#plane--hp--8').text(`HP: ${planes[val].hp}`);
        $('#plane--attack--8').text(`Attack: ${planes[val].attack}`);
        $('#plane--crit--8').text(`Crit: ${planes[val].crit}`);
        $('#plane--eva--8').text(`Evasion:  ${planes[val].evasion}`);
    });

    $('#plane9').change(function () {
        var val = parseInt($('#plane9').val());
        $('#squad-photo-9').attr('src', planeImgList[val]);

        $('#plane--name--9').text(`Name: ${planes[val].name}`);
        $('#plane--hp--9').text(`HP: ${planes[val].hp}`);
        $('#plane--attack--9').text(`Attack: ${planes[val].attack}`);
        $('#plane--crit--9').text(`Crit: ${planes[val].crit}`);
        $('#plane--eva--9').text(`Evasion:  ${planes[val].evasion}`);
    });

    $('#plane10').change(function () {
        var val = parseInt($('#plane10').val());
        $('#squad-photo-10').attr('src', planeImgList[val]);

        $('#plane--name--10').text(`Name: ${planes[val].name}`);
        $('#plane--hp--10').text(`HP: ${planes[val].hp}`);
        $('#plane--attack--10').text(`Attack: ${planes[val].attack}`);
        $('#plane--crit--10').text(`Crit: ${planes[val].crit}`);
        $('#plane--eva--10').text(`Evasion:  ${planes[val].evasion}`);
    });


    $('#reset').on('click', function (e) {
        e.preventDefault();

        $('#squad--name').val('');
        $('.squad--photo').attr('src', '/img/sky.jpg');
        $('.plane--selector').val(' ');
        $('.plane--name').text('Name: Select a unit!');
        $('.plane--hp').text('HP: Select a unit!');
        $('.plane--attack').text('Attack: Select a unit!');
        $('.plane--crit').text('Crit:  Select a unit!');
        $('.plane--eva').text('Evasion:  Select a unit!');
    });

    $('.modal--close').on('click', function (e) {

        e.preventDefault();

        modal.hide();
    });

    //On submit click, do something.
    $('#submit').on('click', function (e) {

        e.preventDefault();

        //Variables.
        var squadName = $('#squad--name').val().trim();
        var alreadyExists = false;
        var getPID;

        //Check the name for spaces
        var spaceCheck = function (squadName) {
            return squadName.indexOf(' ') === -1;
        };

        //Be sure everything is alphanumeric.
        var alphaNumCheck = function (squadName) {
            if (/[^a-zA-Z0-9]/.test(squadName)) {
                return false;
            }
            return true;
        }

        //If their are spaces in the name, be sure to tell the user to fill it in
        if (spaceCheck(squadName) === false || squadName === "") {
            modal.show();
            modalTitle.text("Failure to Launch!");
            modalText.text(`You can't have any spaces in your Squadron name. It also can not be left empty`);
            return;
        }

        //If there are non-alphanumeric stuff in squadname, do a check.
        if (alphaNumCheck(squadName) === false) {
            modal.show();
            modalTitle.text("Failure to Launch!");
            modalText.text(`Your Squadron name must be alphanumeric.`);
            return;
        }

        //Longer than 50 check
        if (squadName.length > 50) {
            modal.show();
            modalTitle.text("Failure to Launch!");
            modalText.text(`Your Squadron name must be less than 50 characters.`);
            return;
        }

        //If there is an empty plane, tell the user.
        if ($(".plane--selector").val() === " ") {
            modal.show();
            modalTitle.text("Failure to Launch!");
            modalText.text(`Make sure you have a full squadron!`);
            return;
        }

        //Getting the squadron name
        var squadron = {
            Name: squadName
        }

        //This loop will for set getPID to a certain ID for a certain plane and post the plane to our api
        for (let i = 1; i < 11; i++) {
            switch ($(`#plane${[i]} :selected`).text()) {
                case "Su-35 Flanker-E":
                    getPID = 1;
                    break;
                case "F-117 Nighthawk":
                    getPID = 2;
                    break;
                case "F-15 Eagle":
                    getPID = 3;
                    break;
                case "F-22 Raptor":
                    getPID = 4;
                    break;
                case "Su-57 PAK FA":
                    getPID = 5;
                    break;
                case "Mig-35 Fulcrum":
                    getPID = 6;
                    break;
                case "Su-27 Flanker":
                    getPID = 7;
                    break;
                case "S-400 Triumph":
                    getPID = 8;
                    break;
                case "MIM-104 Patriot":
                    getPID = 9;
                    break;
                case "GF13-017NJII God Gundam":
                    getPID = 10;
                    break;
                case "JDG-00X Devil Gundam":
                    getPID = 11;
                    break;
                case "Trump Force One":
                    getPID = 12;
                    break;
                case "Death Star":
                    getPID = 13;
                    break;
                default:
                    getPID = 1;
                    break;
            }

            //This is the data that will be posted
            var postPlanes = {
                Name: squadName,
                planeName: $(`#plane${[i]} :selected`).text(),
                pID: getPID
            }

            //This is out post function to the plane api
            $.ajax({
                type: "POST",
                url: "/api/planes",
                data: postPlanes
            }).then(function () {
            });
        }

        // This will post the name of the squad to the squadron api.
        $.ajax({
            type: "POST",
            url: "/api/squadron",
            data: squadron
        }).then(function () {
        });

        modal.show();
        modalTitle.text("Success!");
        modalText.text(`You've successfully created Squadron: ${$('#squad--name').val().trim()}. Happy hunting!`);
        $(".fight").show();

        //On click, reset the submitted data
        $('#reset').click();

        //END SUBMIT ON CLICK
    });
    if (window.addEventListener) {
        var state = 0, konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
        window.addEventListener("keydown", function (e) {
            if (e.keyCode == konami[state]) state++;
            else state = 0;
            if (state == 10)
                window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        }, true);
    }
});
