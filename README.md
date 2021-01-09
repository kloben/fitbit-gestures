# Gestures for Fitbit

This library allows you to detect different gestures in Fitbit apps. Tested only on Fitbit SDK 5.0

## Installation

Install the library with `npm i fitbit-gestures` or `yarn add fitbit-gestures` 

## Gestures

**Swipe, Double Tap, Slide** (More gestures soon) 

## Usage

You must provide an [Element](https://dev.fitbit.com/build/reference/device-api/document/#interface-element) or the ID of an existing element.

Selected element should have "pointer-events" set to "visible". Will work only on elements which can have this attribute like [RectElements](https://dev.fitbit.com/build/guides/user-interface/svg/#rectangles).

```xml
<svg>
  <rect id="detectorElement" pointer-events="visible" />
</svg>
```

> **Warning**
>
> Keep in mind that only one listener can be attached to each element. Attaching multiple detectors to the same element will overwrite the previous ones. 


### Gesture Detector

For each gesture, you can customize the detectors. View Single Gesture examples below.

```typescript
import { GestureDetector, SlideData, SWIPE_DIR } from 'fitbit-gestures';

// Get the element. You can also pass the element ID
const element = document.getElementById('detectorElement'); 

const detector = new GestureDetector(element)
    .onSwipe((dir: SWIPE_DIR) => {
      //Do something
    })
    .onDoubleTap(() => {
      //Do something
    })
    .onSlide((data: SlideData) => {
      //Do something
    });
```


#### Single gesture detectors

If you only need one type of gesture, it will be slightly faster to use a dedicated class. 

#### Swipe only

```typescript
import { SwipeDetector, SWIPE_DIR, SwipeConfig } from 'fitbit-gestures';

// Get the element. You can also pass the element ID as string
const element = document.getElementById('detectorElement');

//Optional configuration
const swipeConfig: SwipeConfig = {
  threshold: 100
};

const detector = new SwipeDetector(element, onSwipe.bind(this), swipeConfig);

function onSwipe(direction: SWIPE_DIR) {
  if(SWIPE_DIR.DOWN) {
    //Do something
  }
}
```

##### Swipe configuration (Optional)

| Attribute | Description | Default |
| --- | :--- | --- |
| **threshold** | Distance (in pixels) required to trigger the event | 100px

#### DoubleTap only

```typescript
import { DoubleTapDetector, DoubleTapConfig } from 'fitbit-gestures';

// Get the element. You can also pass the element ID as string
const element = document.getElementById('detectorElement'); 

//Optional configuration
const doubleTapConfig: DoubleTapConfig = {
  interval: 250
}

const detector = new DoubleTapDetector(element, onDoubleTap.bind(this), doubleTapConfig);

function onDoubleTap() {
  //Do something
}
```

##### DoubleTap configuration (Optional)

| Attribute | Description | Default |
| --- | :--- | --- |
| **interval** | Time (in ms) required to trigger the event | 250ms

#### Slide only

```typescript
import { SlideDetector, SlideData } from 'fitbit-gestures';

// Get the element. You can also pass the element ID as string
const element = document.getElementById('detectorElement');

const detector = new SlideDetector(element, onSlide.bind(this));

function onSlide(data: SlideData) {
  //Do something
}
```
