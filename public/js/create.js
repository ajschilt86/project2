$(document).ready(function () {

    //arrays
    var planeArray = [];
    var playerChoice = [];

    var planeImgList = [
        '/img/su-35.jpg',
        '/img/b-52.jpg',
        '/img/stealth-fighter.jpg',
        '/img/f-15.jpg',
        '/img/su-57.jpg',
        '/img/mig35.jpg',
        '/img/su27.jpg',
        '/img/s400.jpg',
        '/img/Patriot.jpg',
        '/img/godGundum.jpg',
        '/img/DevilGundam_profile.png',
        '/img/DevilGundam_profile.png',
        '/img/deathstar.jpg'
    ];

    var planes = [
        {
            'UID': 1,
            'name': 'Su-35 Flanker-E',
            'img': '/img/su-35.jpg',
            'hp': '100',
            'attack': '10',
            'evasion': '35',
            'crit': '35%'
        },
        {
            'UID': 2,
            'name': 'F-117 Nighthawk',
            'img': '/img/stealth-fighter.jpg',
            'hp': '100',
            'attack': '5',
            'evasion': '80',
            'crit': '15%'
        },
        {
            'UID': 3,
            'name': 'F-15 Eagle',
            'img': '/img/f-15.jpg',
            'hp': '100',
            'attack': '12',
            'evasion': '30',
            'crit': '40%'
        },
        {
            'UID': 4,
            'name': 'F-22 Raptor',
            'img': '/img/f-22.jpg',
            'hp': '100',
            'attack': '15',
            'evasion': '90',
            'crit': '15%'
        },
        {
            'UID': 5,
            'name': 'Su-57 PAK FA',
            'img': '/img/su-57.jpg',
            'hp': '100',
            'attack': '13',
            'evasion': '85',
            'crit': '25%'
        },
        {
            'UID': 6,
            'name': 'Mig-35 Fulcrum',
            'img': '/img/mig35.jpg',
            'hp': '100',
            'attack': '10',
            'evasion': '35',
            'crit': '35%'
        },
        {
            'UID': 7,
            'name': 'Su-27 Flanker',
            'img': '/img/su27.jpg',
            'hp': '100',
            'attack': '8',
            'evasion': '30',
            'crit': '10%'
        },
        {
            'UID': 8,
            'name': 'S-400 Triumph',
            'img': '/img/s400.jpg',
            'hp': '30',
            'attack': '50',
            'evasion': '10',
            'crit': '80%'
        },
        {
            'UID': 9,
            'name': 'MIM-104 Patriot',
            'img': '/img/Patriot.jpg',
            'hp': '35',
            'attack': '60',
            'evasion': '5',
            'crit': '85%'
        },
        {
            'UID': 10,
            'name': 'GF13-017NJII God Gundam',
            'img': '/img/godGundum.jpg',
            'hp': '500',
            'attack': '85',
            'evasion': '85',
            'crit': '10%'
        },
        {
            'UID': 11,
            'name': 'JDG-00X Devil Gundam',
            'img': '/img/DevilGundam_profile.png',
            'hp': '666',
            'attack': '95',
            'evasion': '55',
            'crit': '15%'
        },
        {
            'UID': 12,
            'name': 'Trump Force One',
            'img': '/img/DevilGundam_profile.png',
            'hp': '450',
            'attack': '5',
            'evasion': '90',
            'crit': '5%'
        },
        {
            'UID': 13,
            'name': 'Death Star',
            'img': '/img/deathstar.jpg',
            'hp': '5000',
            'attack': '75',
            'evasion': '0',
            'crit': '10%'
        }
    ]

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
        $('#plane--defense--1').text(`Defense: ${planes[val].defense}`);
        $('#plane--crit--1').text(`Evasion %: ${planes[val].evasion}`);
        $('#plane--eva--1').text(`Crit: ${planes[val].crit}`);
    });

    $('#plane2').change(function () {
        var val = parseInt($('#plane2').val());
        $('#squad-photo-2').attr('src', planeImgList[val]);

        $('#plane--name--2').text(`Name: ${planes[val].name}`);
        $('#plane--hp--2').text(`HP: ${planes[val].hp}`);
        $('#plane--attack--2').text(`Attack: ${planes[val].attack}`);
        $('#plane--defense--2').text(`Defense: ${planes[val].defense}`);
        $('#plane--crit--2').text(`Evasion %: ${planes[val].evasion}`);
        $('#plane--eva--2').text(`Crit: ${planes[val].crit}`);
    });

    $('#plane3').change(function () {
        var val = parseInt($('#plane3').val());
        $('#squad-photo-3').attr('src', planeImgList[val]);

        $('#plane--name--3').text(`Name: ${planes[val].name}`);
        $('#plane--hp--3').text(`HP: ${planes[val].hp}`);
        $('#plane--attack--3').text(`Attack: ${planes[val].attack}`);
        $('#plane--defense--3').text(`Defense: ${planes[val].defense}`);
        $('#plane--crit--3').text(`Evasion %: ${planes[val].evasion}`);
        $('#plane--eva--3').text(`Crit: ${planes[val].crit}`);
    });

    $('#plane4').change(function () {
        var val = parseInt($('#plane4').val());
        $('#squad-photo-4').attr('src', planeImgList[val]);

        $('#plane--name--4').text(`Name: ${planes[val].name}`);
        $('#plane--hp--4').text(`HP: ${planes[val].hp}`);
        $('#plane--attack--4').text(`Attack: ${planes[val].attack}`);
        $('#plane--defense--4').text(`Defense: ${planes[val].defense}`);
        $('#plane--crit--4').text(`Evasion %: ${planes[val].evasion}`);
        $('#plane--eva--4').text(`Crit: ${planes[val].crit}`);
    });

    $('#plane5').change(function () {
        var val = parseInt($('#plane5').val());
        $('#squad-photo-5').attr('src', planeImgList[val]);

        $('#plane--name--5').text(`Name: ${planes[val].name}`);
        $('#plane--hp--5').text(`HP: ${planes[val].hp}`);
        $('#plane--attack--5').text(`Attack: ${planes[val].attack}`);
        $('#plane--defense--5').text(`Defense: ${planes[val].defense}`);
        $('#plane--crit--5').text(`Evasion %: ${planes[val].evasion}`);
        $('#plane--eva--5').text(`Crit: ${planes[val].crit}`);
    });

    $('#plane6').change(function () {
        var val = parseInt($('#plane6').val());
        $('#squad-photo-6').attr('src', planeImgList[val]);

        $('#plane--name--6').text(`Name: ${planes[val].name}`);
        $('#plane--hp--6').text(`HP: ${planes[val].hp}`);
        $('#plane--attack--6').text(`Attack: ${planes[val].attack}`);
        $('#plane--defense--6').text(`Defense: ${planes[val].defense}`);
        $('#plane--crit--6').text(`Evasion %: ${planes[val].evasion}`);
        $('#plane--eva--6').text(`Crit: ${planes[val].crit}`);
    });

    $('#plane7').change(function () {
        var val = parseInt($('#plane7').val());
        $('#squad-photo-7').attr('src', planeImgList[val]);

        $('#plane--name--7').text(`Name: ${planes[val].name}`);
        $('#plane--hp--7').text(`HP: ${planes[val].hp}`);
        $('#plane--attack--7').text(`Attack: ${planes[val].attack}`);
        $('#plane--defense--7').text(`Defense: ${planes[val].defense}`);
        $('#plane--crit--7').text(`Evasion %: ${planes[val].evasion}`);
        $('#plane--eva--7').text(`Crit: ${planes[val].crit}`);
    });

    $('#plane8').change(function () {
        var val = parseInt($('#plane8').val());
        $('#squad-photo-8').attr('src', planeImgList[val]);

        $('#plane--name--8').text(`Name: ${planes[val].name}`);
        $('#plane--hp--8').text(`HP: ${planes[val].hp}`);
        $('#plane--attack--8').text(`Attack: ${planes[val].attack}`);
        $('#plane--defense--8').text(`Defense: ${planes[val].defense}`);
        $('#plane--crit--8').text(`Evasion %: ${planes[val].evasion}`);
        $('#plane--eva--8').text(`Crit: ${planes[val].crit}`);
    });

    $('#plane9').change(function () {
        var val = parseInt($('#plane9').val());
        $('#squad-photo-9').attr('src', planeImgList[val]);

        $('#plane--name--9').text(`Name: ${planes[val].name}`);
        $('#plane--hp--9').text(`HP: ${planes[val].hp}`);
        $('#plane--attack--9').text(`Attack: ${planes[val].attack}`);
        $('#plane--defense--9').text(`Defense: ${planes[val].defense}`);
        $('#plane--crit--9').text(`Evasion %: ${planes[val].evasion}`);
        $('#plane--eva--9').text(`Crit: ${planes[val].crit}`);
    });

    $('#plane10').change(function () {
        var val = parseInt($('#plane10').val());
        $('#squad-photo-10').attr('src', planeImgList[val]);

        $('#plane--name--10').text(`Name: ${planes[val].name}`);
        $('#plane--hp--10').text(`HP: ${planes[val].hp}`);
        $('#plane--attack--10').text(`Attack: ${planes[val].attack}`);
        $('#plane--defense--10').text(`Defense: ${planes[val].defense}`);
        $('#plane--crit--10').text(`Evasion %: ${planes[val].evasion}`);
        $('#plane--eva--10').text(`Crit: ${planes[val].crit}`);
    });


    $('#reset').on('click', function (e) {
        e.preventDefault();

        $('#squad--name').val('');
        $('.squad--photo').attr('src', '/img/sky.jpg');
        $('.plane--selector').val(' ');
        $('.plane--name').text('Name: Select a unit!');
        $('.plane--hp').text('HP: Select a unit!');
        $('.plane--attack').text('Attack: Select a unit!');
        $('.plane--eva').text('Evasion %: Select a unit!');
    });

    $('#submit').on('click', function (e) {

        e.preventDefault();

        var squadron = {
            Name: $('#squad--name').val().trim()
        }

        var getPID;

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

            var postPlanes = {
                Name: $('#squad--name').val().trim(),
                planeName: $(`#plane${[i]} :selected`).text(),
                pID: getPID
            }

            $.ajax({
                type: "POST",
                url: "/api/planes",
                data: postPlanes
            }).then(function () {
                console.log('Hey');
            });
        }

        // This is working, commenting it out to try something
        $.ajax({
            type: "POST",
            url: "/api/squadron",
            data: squadron
        }).then(function () {
            console.log('Created new squad');
        });

        // $('#reset').click();
    });
});
