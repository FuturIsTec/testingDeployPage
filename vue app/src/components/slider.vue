<template>
    <div class="slider">
        <div class="slider-label">{{ label }}</div>
        <input type="range" :min="min" :max="max" :step="step" :value="value" @input="updateValue" />
    </div>
</template>
  
<script>
export default {
    name: "customSlider",
    props: {
        label: {
            type: String,
            default: "Slider",
        },
        value: {
            type: Number,
            default: 0,
        },
        min: {
            type: Number,
            default: 0,
        },
        max: {
            type: Number,
            default: 100,
        },
        step: {
            type: Number,
            default: 1,
        },
    },
    methods: {
        updateValue(event) {
            this.$emit("input", parseInt(event.target.value));
        },
    },
};
</script>
  
<style scoped>
.slider {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 1rem;
}

.slider-label {
    font-size: 1.2rem;
    margin-right: 1rem;
}

input[type="range"] {
    -webkit-appearance: none;
    height: 0.5rem;
    width: 100%;
    margin: 0;
}

input[type="range"]:focus {
    outline: none;
}

input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 0.5rem;
    cursor: pointer;
    background: #ddd;
    border-radius: 25px;
}

input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    background: #007aff;
    margin-top: -0.5rem;
    cursor: pointer;
}

input[type="range"]:focus::-webkit-slider-runnable-track {
    background: #ccc;
}

input[type="range"]::-moz-range-track {
    width: 100%;
    height: 0.5rem;
    cursor: pointer;
    background: #ddd;
    border-radius: 25px;
}

input[type="range"]::-moz-range-thumb {
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    background: #007aff;
    cursor: pointer;
}

input[type="range"]::-ms-track {
    width: 100%;
    height: 0.5rem;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
}

input[type="range"]::-ms-fill-lower {
    background: #ddd;
    border-radius: 25px;
}

input[type="range"]::-ms-fill-upper {
    background: #ddd;
    border-radius: 25px;
}

input[type="range"]::-ms-thumb {
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    background: #007aff;
    cursor: pointer;
    margin-top: 0;
}
</style>
  