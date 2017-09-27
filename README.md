# Aplicacion para la presentacion de los cursos de ingles

## Intención

Tener una manera interactiva de presentar los cursos de manera que se pueda tener mas agilidad al momento de estar presentando los cursos.

La intension es tener a la vista los dialogos que se estan presentando de manera que sea mas facil darle seguimiento

## Guia de funciones que se pueden utilizar

### Properties

- `HTMLMediaElement.controls`: 
    Is a `Boolean` that reflects the `controls` HTML attribute, indicating whether user interface items for controlling the resource should be displayed
- `HTMLMediaElement.controlsList`: 
    __ReadOnly__ Returns a `DOMTokenList` that helps the user agent select what controls to show on the media element whenever the user agent shows its own set of controls. The DOMTokenList takes one or more of three possible values: `nodownload`, `nofullscreen`, and `noremoteplayback`.
- `HTMLMediaElement.currentSrc`: 
    Returns a `DOMString` with the absolute URL of the chosen media resource.
- __`HTMLMediaElement.currentTime`__: 
    Is a `double` indicating the current playback time in seconds. Setting this value seeks the media to the new time.
- `HTMLMediaElement.duration`: __ReadOnly__
    Returns a double indicating the length of the media in seconds, or 0 if no media data is available.
- `HTMLMediaElement.muted`: 
    Is a `Boolean` that determines whether audio is muted. `true` if the audio is muted and `false` otherwise
- `HTMLMediaElement.playbackRate`:
    Is a double that indicates the rate at which the media is being played back. 
- `HTMLMediaElement.played`: __ReadOnly__
    Returns a TimeRanges object that contains the ranges of the media source that the browser has played, if any.
- `HTMLMediaElement.src`:
    Is a `DOMString` that reflects the `src` HTML attribute, which contains the URL of a media resource to use.
- `HTMLMediaElement.volume`:
    Is a `double` indicating the audio volume, from 0.0 (silent) to 1.0 (loudest).
- `HTMLMediaElement.preload`
    Is a `DOMString` that reflects the preload HTML attribute, indicating what data should be preloaded, if any. Possible values are: `none`, `metadata`, `auto`.

### Methods

- `HTMLMediaElement.addTextTrack()`:
    Adds a text track (such as a track for subtitles) to a media element.
- `HTMLMediaElement.fastSeek()`:
    Directly seeks to the given time.
- `HTMLMediaElement.pause()`:
    Pauses the media playback.
- `HTMLMediaElement.play()`:
    Begins playback of the media.

### Video specific properties

- `HTMLVideoElement.height`:
    Is a DOMString that reflects the height HTML attribute, which specifies the height of the display area, in CSS pixels.
- `HTMLVideoElement.poster`:
    Is a DOMString that reflects the poster HTML attribute, which specifies an image to show while no video data is available.
- `HTMLVideoElement.videoHeight`: __ReadOnly__
    Returns an unsigned long containing the intrinsic height of the resource in CSS pixels, taking into account the dimensions, aspect ratio, clean aperture, resolution, and so forth, as defined for the format used by the resource. If the element's ready state is HAVE_NOTHING, the value is 0.
- `HTMLVideoElement.videoWidth`: __ReadOnly__
    Returns an unsigned long containing the intrinsic width of the resource in CSS pixels, taking into account the dimensions, aspect ratio, clean aperture, resolution, and so forth, as defined for the format used by the resource. If the element's ready state is HAVE_NOTHING, the value is 0.
- `HTMLVideoElement.width`:
    Is a DOMString that reflects the width HTML attribute, which specifies the width of the display area, in CSS pixels. 

### Events

- `timeupdate`: The `timeupdate` event is fired when the time indicated by the `currentTime` attribute has been updated.
- `ended` 	Playback has stopped because the end of the media was reached.
- `play` Playback has begun.
- `pause` Playback has been paused.
- 