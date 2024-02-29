import state from "./state.js"
import * as timer from "./timer.js"
import * as elements from "./elements.js"
import * as sounds from "./sounds.js"

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle("running")
    timer.countdown()
    sounds.buttonPressAudio.play();
}

export function reset() {
    state.isRunning = false;
    document.documentElement.classList.remove("running")
    sounds.buttonPressAudio.play();
}

export function set() {
    elements.minutes.setAttribute("contenteditable", true);
    elements.minutes.focus();
    sounds.buttonPressAudio.play();
}

export function toggleMusic() {
    state.isMute = document.documentElement.classList.toggle("music-on")
    sounds.buttonPressAudio.play();
    if (state.isMute) {
        sounds.bgAudio.play();
        return;
    }

    sounds.bgAudio.pause();
}