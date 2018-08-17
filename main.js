var cubeSize = {
    x: 4,
    y: 4,
    z: 4
}

var pieces = {
    0: [{
            x: 0,
            y: 0,
            z: 0
        },
        {
            x: 1,
            y: 0,
            z: 0
        },
        {
            x: 2,
            y: 0,
            z: 0
        },
        {
            x: 0,
            y: 1,
            z: 0
        },
        {
            x: 0,
            y: 2,
            z: 0
        },
        {
            x: 0,
            y: 3,
            z: 0
        },
        {
            x: 1,
            y: 3,
            z: 0
        }
    ],
    1: [{
            x: 0,
            y: 0,
            z: 0
        },
        {
            x: 1,
            y: 0,
            z: 0
        },
        {
            x: 0,
            y: 1,
            z: 0
        },
        {
            x: 0,
            y: 2,
            z: 0
        },
        {
            x: 0,
            y: 3,
            z: 0
        },
        {
            x: 1,
            y: 3,
            z: 0
        }
    ],
    2: [{
            x: 0,
            y: 0,
            z: 0
        },
        {
            x: 1,
            y: 0,
            z: 0
        },
        {
            x: 2,
            y: 0,
            z: 0
        },
        {
            x: 0,
            y: 0,
            z: 1
        },
        {
            x: 0,
            y: 1,
            z: 0
        }
    ],
    3: [{
            x: 0,
            y: 0,
            z: 0
        },
        {
            x: 0,
            y: 0,
            z: 1
        },
        {
            x: 0,
            y: 0,
            z: 2
        },
        {
            x: 1,
            y: 0,
            z: 2
        },
        {
            x: 1,
            y: 0,
            z: 3
        },
        {
            x: 0,
            y: 1,
            z: 0
        },
        {
            x: 1,
            y: 1,
            z: 0
        },
        {
            x: 2,
            y: 1,
            z: 0
        },
        {
            x: 3,
            y: 1,
            z: 0
        }
    ],
    4: [{
            x: 3,
            y: 0,
            z: 0
        },
        {
            x: 1,
            y: 0,
            z: 0
        },
        {
            x: 2,
            y: 0,
            z: 0
        },
        {
            x: 2,
            y: 1,
            z: 0
        },
        {
            x: 1,
            y: 0,
            z: 1
        },
        {
            x: 0,
            y: 0,
            z: 1
        },
        {
            x: 0,
            y: 0,
            z: 2
        },
        {
            x: 0,
            y: 0,
            z: 3
        },
        {
            x: 1,
            y: 0,
            z: 3
        },
        {
            x: 2,
            y: 0,
            z: 3
        }
    ],
    5: [{
            x: 3,
            y: 0,
            z: 0
        }, {
            x: 1,
            y: 0,
            z: 2
        }, {
            x: 1,
            y: 0,
            z: 3
        }, {
            x: 0,
            y: 0,
            z: 3
        }, {
            x: 0,
            y: 1,
            z: 3
        }, {
            x: 0,
            y: 2,
            z: 3
        }, {
            x: 2,
            y: 0,
            z: 3
        }, {
            x: 1,
            y: 2,
            z: 3
        },
        {
            x: 1,
            y: 0,
            z: 1
        },
        {
            x: 1,
            y: 0,
            z: 0
        },
        {
            x: 2,
            y: 0,
            z: 0
        },
        {
            x: 0,
            y: 0,
            z: 1
        },
    ],
    6: [{
            x: 0,
            y: 0,
            z: 0
        },
        {
            x: 1,
            y: 0,
            z: 0
        },
        {
            x: 2,
            y: 0,
            z: 0
        },
        {
            x: 1,
            y: 1,
            z: 0
        },
        {
            x: 0,
            y: 0,
            z: 1
        },
        {
            x: 0,
            y: 0,
            z: 2
        },
        {
            x: 0,
            y: 1,
            z: 2
        },
        {
            x: 1,
            y: 1,
            z: 2
        },
        {
            x: 2,
            y: 1,
            z: 2
        },
        {
            x: 2,
            y: 2,
            z: 2
        },
        {
            x: 2,
            y: 1,
            z: 3
        }
    ]
};

function tX(cube, x) {
    x = x == 0 ? x : x || 1;

    cube.x = cube.x + x;
    return cube;
}

function tY(cube, y) {
    y = y == 0 ? y : y || 1;

    cube.y = cube.y + y;
    return cube;
}

function tZ(cube, z) {
    z = z == 0 ? z : z || 1;

    cube.z = cube.z + z;
    return cube;
}

function rX(cube) {
    var x = cube.x;
    var y = cube.y;
    var z = cube.z;

    cube.x = x;
    cube.y = -z;
    cube.z = y;
    return cube;
}

function rY(cube) {
    var x = cube.x;
    var y = cube.y;
    var z = cube.z;

    cube.x = z;
    cube.y = y;
    cube.z = -x;
    return cube;
}

function rZ(cube) {
    var x = cube.x;
    var y = cube.y;
    var z = cube.z;

    cube.x = -y;
    cube.y = x;
    cube.z = z;
    return cube;
}

function translatePiece(piece, translateFunc, nb) {
    var newPiece = [];

    for (var i = 0; i < piece.length; i++) {
        var cube = Object.assign({}, piece[i]);
        cube = translateFunc(cube, nb);
        newPiece.push(cube);
    }

    return newPiece;
}

function validatePositionPiece(piece, cubeSize) {
    for (var i = 0; i < piece.length; i++) {
        var cube = piece[i];
        if (cube.x + 1 > cubeSize.x || cube.x < 0) {
            return false;
        }
        if (cube.y + 1 > cubeSize.y || cube.y < 0) {
            return false;
        }
        if (cube.z + 1 > cubeSize.z || cube.z < 0) {
            return false;
        }
    }

    return true;
}

function resetPiece(tpiece, opiece, axe) {
    var newPiece = [];

    for (var i = 0; i < tpiece.length; i++) {
        var tcube = Object.assign({}, tpiece[i]);
        var ocube = Object.assign({}, opiece[i]);
        tcube[axe] = ocube[axe];
        newPiece.push(tcube);
    }
    return newPiece;
}

function resetPiece0(piece) {
    var firstCube = piece[0];
    var m0 = {
        x: -firstCube.x,
        y: -firstCube.y,
        z: -firstCube.z
    }

    var newPiece = translatePiece(piece, tX, m0.x);
    newPiece = translatePiece(newPiece, tY, m0.y);
    newPiece = translatePiece(newPiece, tZ, m0.z);

    return newPiece;
}

function allTranslation(piece, cubeSize) {
    var avaiablePositions = [];

    var piece = resetPiece0(piece);
    for (var x = 0; x < cubeSize.x; x++) {
        var tpiece = translatePiece(piece, tX, x);
        for (var y = 0; y < cubeSize.y; y++) {
            tpiece = translatePiece(tpiece, tY, y);
            for (var z = 0; z < cubeSize.z; z++) {
                tpiece = translatePiece(tpiece, tZ, z);
                if (validatePositionPiece(tpiece, cubeSize)) {
                    avaiablePositions.push(tpiece);
                }
                tpiece = resetPiece(tpiece, piece, 'z');
            }
            tpiece = resetPiece(tpiece, piece, 'y');
        }
    }
    return avaiablePositions;
}

function calculPositionsPiece(piece, cubeSize) {
    var avaiablePositions = [];

    //rX
    for (var rXcount = 0; rXcount < 4; rXcount++) {
        piece = translatePiece(piece, rX);
        var positionsT = allTranslation(piece, cubeSize);
        avaiablePositions = avaiablePositions.concat(positionsT);
        for (var rYcount = 0; rYcount < 4; rYcount++) {
            piece = translatePiece(piece, rY);
            var positionsT = allTranslation(piece, cubeSize);
            avaiablePositions = avaiablePositions.concat(positionsT);
            for (var rZcount = 0; rZcount < 4; rZcount++) {
                piece = translatePiece(piece, rZ);
                var positionsT = allTranslation(piece, cubeSize);
                avaiablePositions = avaiablePositions.concat(positionsT);
            }
        }
    }

    return avaiablePositions;
}

function dedupe(arr) {
    return arr.reduce(function(p, piece) {

        var id = '';
        for (var cube of piece) {
            id = id + [cube.x, cube.y, cube.z].join('|');
        }

        // if the id is not found in the temp array
        // add the object to the output array
        // and add the key to the temp array
        if (p.temp.indexOf(id) === -1) {
            p.out.push(piece);
            p.temp.push(id);
        }
        return p;

        // return the deduped array
    }, { temp: [], out: [] }).out;
}



function calculPositionsPieces(pieces, cubeSize) {
    var positionsPieces = {};

    for (var key in pieces) {
        var piece = pieces[key];
        var positions = calculPositionsPiece(piece, cubeSize);
        positionsPieces[key] = positions;
    }

    return positionsPieces;
}

function isPiecesOnSameSpot(pieces) {
    var cubes = [];

    for (var key in pieces) {
        cubes = cubes.concat(pieces[key]);
    }
    for (var i = 0; i < cubes.length; i++) {
        for (var j = i; j < cubes.length; j++) {
            if (cubes[i].x == cubes[j].x && cubes[i].y == cubes[j].y && cubes[i].z == cubes[j].z && cubes[i] != cubes[j]) {
                return true;
            }
        }
    }
    return false;
}


function testAllCombination(positionsPieces) {
    var positionsPiece1 = positionsPieces[0];
    var positionsPiece2 = positionsPieces[1];
    var positionsPiece3 = positionsPieces[2];
    var positionsPiece4 = positionsPieces[3];
    var positionsPiece5 = positionsPieces[4];
    var positionsPiece6 = positionsPieces[5];
    var positionsPiece7 = positionsPieces[6];

    var pieces = {};

    var combinations = [];


    for (var i = 0; i < positionsPiece1.length; i++) {
        pieces[0] = positionsPiece1[i];
        for (var j = 0; j < positionsPiece2.length; j++) {
            pieces[1] = positionsPiece2[j];
            for (var k = 0; k < positionsPiece3.length; k++) {
                if (isPiecesOnSameSpot(Object.values(pieces).slice(0, 2))) {
                    break;
                }
                pieces[2] = positionsPiece3[k];
                for (var l = 0; l < positionsPiece4.length; l++) {
                    if (isPiecesOnSameSpot(Object.values(pieces).slice(0, 3))) {
                        break;
                    }
                    pieces[3] = positionsPiece4[l];
                    for (var m = 0; m < positionsPiece5.length; m++) {
                        if (isPiecesOnSameSpot(Object.values(pieces).slice(0, 4))) {
                            break;
                        }
                        pieces[4] = positionsPiece5[m];
                        for (var n = 0; n < positionsPiece6.length; n++) {
                            if (isPiecesOnSameSpot(Object.values(pieces).slice(0, 5))) {
                                break;
                            }
                            pieces[5] = positionsPiece6[n];
                            for (var o = 0; o < positionsPiece7.length; o++) {
                                if (isPiecesOnSameSpot(Object.values(pieces).slice(0, 6))) {
                                    break;
                                }
                                pieces[6] = positionsPiece7[o];
                                if (!isPiecesOnSameSpot(Object.values(pieces).slice(0, 7))) {
                                    combinations.push(Object.assign({}, Object.values(pieces).slice(0, 7)));
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    return combinations;
}