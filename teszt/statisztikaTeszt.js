import Statisztika from "../js/Statisztika.js";

QUnit.module('tesztek ffi re', function (hooks) {
    let szemelyek = [
        {
            kor: 56,
            nem: "ffi",
            nev: "Béla",
        },
        {
            kor: 16,
            nem: "ffi",
            nev: "Jenő", 
        },
        {
            kor: 33,
            nem: "nő",
            nev: "Rózsa", 
        },
    ];

   
    QUnit.test('létezik e', function (assert) {
        let STAT = new Statisztika(szemelyek);
        assert.ok(STAT.nemszerintSzama, 'létezik');
    });
  

    QUnit.test('üres', function (assert) {
        szemelyek = []
        let STAT = new Statisztika(szemelyek);
        assert.equal(STAT.nemszerintSzama("ffi"), 0);
    });

    QUnit.test('csaknö', function (assert) {
        szemelyek = [{nem:"nő"},{nem:"nő"},{nem:"nő"}]
        let STAT = new Statisztika(szemelyek);
        assert.equal(STAT.nemszerintSzama("ffi"), 0);
    });

    QUnit.test('csakferfi', function (assert) {
        szemelyek = [{nem:"ffi"},{nem:"ffi"},{nem:"ffi"}]
        let STAT = new Statisztika(szemelyek);
        assert.equal(STAT.nemszerintSzama("ffi"), 3);
    });

    QUnit.test('egyéb', function (assert) {
        szemelyek = [{nem:"?"},{nem:"apache helikopter"},{nem:"ff"}]
        let STAT = new Statisztika(szemelyek);
        assert.equal(STAT.nemszerintSzama("ffi"), 0);
    });

    QUnit.test('vannak üresek', function (assert) {
        szemelyek = [{nem:"ffi"},{nem:""},{}]
        let STAT = new Statisztika(szemelyek);
        assert.equal(STAT.nemszerintSzama("ffi"), 1);
    });

    QUnit.test('nem kulcs nincs megadva', function (assert) {
        szemelyek = [{nem:""},{nem:""},{nem:""}]
        let STAT = new Statisztika(szemelyek);
        assert.equal(STAT.nemszerintSzama("ffi"), 0);
    });
    
    QUnit.test('vegyes', function (assert) {
        szemelyek = [{nem:"apache helikopter"},{nem:""},{nem:"ffi"}]
        let STAT = new Statisztika(szemelyek);
        assert.equal(STAT.nemszerintSzama("ffi"), 1);
    });

    QUnit.test('vanszam', function (assert) {
        szemelyek = [{nem:"ffi"},{nem: 2},{nem:"ffi"}]
        let STAT = new Statisztika(szemelyek);
        assert.equal(STAT.nemszerintSzama("ffi"), 2);
    });
});

QUnit.module('tesztek nő re', function (hooks) {
    let szemelyek = [
        {
            kor: 56,
            nem: "nő",
            nev: "Béla",
        },
        {
            kor: 16,
            nem: "nő",
            nev: "Jenő", 
        },
        {
            kor: 33,
            nem: "nő",
            nev: "Rózsa", 
        },
    ];

   
    QUnit.test('létezik e', function (assert) {
        let STAT = new Statisztika(szemelyek);
        assert.ok(STAT.nemszerintSzama, 'létezik');
    });
  

    QUnit.test('üres', function (assert) {
        szemelyek = []
        let STAT = new Statisztika(szemelyek);
        assert.equal(STAT.nemszerintSzama("nő"), 0);
    });

    QUnit.test('csaknö', function (assert) {
        szemelyek = [{nem:"nő"},{nem:"nő"},{nem:"nő"}]
        let STAT = new Statisztika(szemelyek);
        assert.equal(STAT.nemszerintSzama("nő"), 3);
    });

    QUnit.test('csakferfi', function (assert) {
        szemelyek = [{nem:"ffi"},{nem:"ffi"},{nem:"ffi"}]
        let STAT = new Statisztika(szemelyek);
        assert.equal(STAT.nemszerintSzama("nő"), 0);
    });

    QUnit.test('egyéb', function (assert) {
        szemelyek = [{nem:"?"},{nem:"apache helikopter"},{nem:"ff"}]
        let STAT = new Statisztika(szemelyek);
        assert.equal(STAT.nemszerintSzama("nő"), 0);
    });

    QUnit.test('vannak üresek', function (assert) {
        szemelyek = [{nem:"nő"},{nem:""},{}]
        let STAT = new Statisztika(szemelyek);
        assert.equal(STAT.nemszerintSzama("nő"), 1);
    });

    QUnit.test('nem kulcs nincs megadva', function (assert) {
        szemelyek = [{nem:""},{nem:""},{nem:""}]
        let STAT = new Statisztika(szemelyek);
        assert.equal(STAT.nemszerintSzama("nő"), 0);
    });
    
    QUnit.test('vegyes', function (assert) {
        szemelyek = [{nem:"apache helikopter"},{nem:""},{nem:"nő"}]
        let STAT = new Statisztika(szemelyek);
        assert.equal(STAT.nemszerintSzama("nő"), 1);
    });

    QUnit.test('vanszam', function (assert) {
        szemelyek = [{nem:"nő"},{nem: 2},{nem:"nő"}]
        let STAT = new Statisztika(szemelyek);
        assert.equal(STAT.nemszerintSzama("nő"), 2);
    });
});


QUnit.module('tesztek egyéb re', function (hooks) {
    let szemelyek = [
        {
            kor: 56,
            nem: "egyéb",
            nev: "Béla",
        },
        {
            kor: 16,
            nem: "egyéb",
            nev: "Jenő", 
        },
        {
            kor: 33,
            nem: "egyéb",
            nev: "Rózsa", 
        },
    ];

   
    QUnit.test('létezik e', function (assert) {
        let STAT = new Statisztika(szemelyek);
        assert.ok(STAT.nemszerintSzama, 'létezik');
    });
  

    QUnit.test('üres', function (assert) {
        szemelyek = []
        let STAT = new Statisztika(szemelyek);
        assert.equal(STAT.nemszerintSzama("egyéb"), 0);
    });

    QUnit.test('csakegyéb', function (assert) {
        szemelyek = [{nem:"egyéb"},{nem:"egyéb"},{nem:"egyéb"}]
        let STAT = new Statisztika(szemelyek);
        assert.equal(STAT.nemszerintSzama("egyéb"), 3);
    });

    QUnit.test('csakferfi', function (assert) {
        szemelyek = [{nem:"ffi"},{nem:"ffi"},{nem:"ffi"}]
        let STAT = new Statisztika(szemelyek);
        assert.equal(STAT.nemszerintSzama("egyéb"), 0);
    });

    QUnit.test('csakno', function (assert) {
        szemelyek = [{nem:"nő"},{nem:"nő"},{nem:"nő"}]
        let STAT = new Statisztika(szemelyek);
        assert.equal(STAT.nemszerintSzama("egyéb"), 0);
    });

    QUnit.test('egyéb', function (assert) {
        szemelyek = [{nem:"?"},{nem:"apache helikopter"},{nem:"ff"}]
        let STAT = new Statisztika(szemelyek);
        assert.equal(STAT.nemszerintSzama("egyéb"), 0);
    });

    QUnit.test('vannak üresek', function (assert) {
        szemelyek = [{nem:"egyéb"},{nem:""},{}]
        let STAT = new Statisztika(szemelyek);
        assert.equal(STAT.nemszerintSzama("egyéb"), 1);
    });

    QUnit.test('nem kulcs nincs megadva', function (assert) {
        szemelyek = [{nem:""},{nem:""},{nem:""}]
        let STAT = new Statisztika(szemelyek);
        assert.equal(STAT.nemszerintSzama("egyéb"), 0);
    });
    
    QUnit.test('vegyes', function (assert) {
        szemelyek = [{nem:"apache helikopter"},{nem:""},{nem:"egyéb"}]
        let STAT = new Statisztika(szemelyek);
        assert.equal(STAT.nemszerintSzama("egyéb"), 1);
    });

    QUnit.test('vanszam', function (assert) {
        szemelyek = [{nem:"egyéb"},{nem: 2},{nem:"egyéb"}]
        let STAT = new Statisztika(szemelyek);
        assert.equal(STAT.nemszerintSzama("egyéb"), 2);
    });
});