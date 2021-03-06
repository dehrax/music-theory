# :musical_score: music-theory [![codecov](https://codecov.io/gh/tskarhed/music-theory/branch/master/graph/badge.svg?token=Msbg6hMaE5)](https://codecov.io/gh/tskarhed/music-theory)  [![CircleCI](https://circleci.com/gh/tskarhed/music-theory.svg?style=svg)](https://circleci.com/gh/tskarhed/music-theory)

Create notes and get their frequencies! Create scales! Create chords!

## Usage

### Create new note using scientific notation

```typescript
import { Note } from "music-theory";

let note = new Note("D#4");
note.freq; //Gives frequency
```

### Create scales

```typescript
import { Scale } from "music-theory";

let scale = new Scale("C3", "major"); //Generates one loop of the scale
scale.getNotes(); // Prints all the notes in the scale

let scale = new Scale("D4", "minor", 8); //Generates 8 notes in the minor scale
```

## Develop

Clone this repository and run

The goal for this repository is to have 100% code coverage, so TDD is strongly encouraged!

```
yarn install
```

After dependencies have been installed, get started by running

```
yarn start
```

And don't forget to run the test watch too!

```
yarn jest
```
