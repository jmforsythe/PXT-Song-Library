function abcMusic(musicString = '', musicTempo = 40, standardLength = 4) {
    music.setTempo(musicTempo)

    let currentLength = standardLength

    for (let item = 0; item < musicString.length; item++) {
        currentLength = standardLength
        if (musicString[item + 1] == '2') {
            currentLength /= 2
        } else if (musicString[item + 1] == '4') {
            currentLength /= 4
        } else if (musicString[item + 1] == '/') {
            currentLength *= 2
        }
        if (musicString[item] == '2' || musicString[item] == '4' || musicString[item] == '/') {
            basic.pause(0)
        } else if (musicString[item] == 'C') {
            music.playTone(Note.C4, music.beat(currentLength))
        } else if (musicString[item] == 'D') {
            music.playTone(Note.D4, music.beat(currentLength))
        } else if (musicString[item] == 'E') {
            music.playTone(Note.E4, music.beat(currentLength))
        } else if (musicString[item] == 'F') {
            music.playTone(Note.F4, music.beat(currentLength))
        } else if (musicString[item] == 'G') {
            music.playTone(Note.G4, music.beat(currentLength))
        } else if (musicString[item] == 'A') {
            music.playTone(Note.A4, music.beat(currentLength))
        } else if (musicString[item] == 'B') {
            music.playTone(Note.B4, music.beat(currentLength))
        } else if (musicString[item] == 'c') {
            music.playTone(Note.C5, music.beat(currentLength))
        } else if (musicString[item] == 'd') {
            music.playTone(Note.D5, music.beat(currentLength))
        } else if (musicString[item] == 'e') {
            music.playTone(Note.E5, music.beat(currentLength))
        } else if (musicString[item] == 'f') {
            music.playTone(Note.F5, music.beat(currentLength))
        } else if (musicString[item] == 'g') {
            music.playTone(Note.G5, music.beat(currentLength))
        } else if (musicString[item] == 'a') {
            music.playTone(Note.A5, music.beat(currentLength))
        } else if (musicString[item] == 'b') {
            music.playTone(Note.B5, music.beat(currentLength))
        }

        if (musicString[item + 1] != '/' && musicString[item] != '/') {
            basic.pause(50)
        }
    }
}
let frereJacques = "cdeccdecefg2efg2g/a/g/f/ecg/a/g/f/eccGc2cGc2"
let jingleBells = "EEE2EEE2EGCDE4FFFFFEE2EDDED2G2"
let deckTheHalls = "A2GF2E2D2E2F2D2EFGEF2ED2C2D4A2GF2E2D2E2F2D2EFGEF2ED2C2D4E2FG2E2F2GA2E2FGA2Bcd2c2B2A4A2GF2E2D2E2F2D2BBBBA2GF2E2D4"
let standardTempo = 40
let standardLength = 4
abcMusic(frereJacques, standardTempo, standardLength)
basic.pause(2000)
//abcMusic(jingleBells, standardTempo * 2, standardLength)
basic.pause(2000)
//abcMusic(deckTheHalls, 40, 8)