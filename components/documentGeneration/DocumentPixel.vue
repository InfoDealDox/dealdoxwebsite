<template>
    <div class="pixel_document_automation">
        <div>
            <h2 class="pixel_perfect_h3">Pixel-perfect documents <br> that set you apart </h2>
            <span class="pixel_perfect_span">Generate branded, high-conversion business documents like proposals, sales
                quotes, and contracts.
                Then, seamlessly send them for to your clients while maintaining image quality. </span>
        </div>
        <div class="docVideo_VEDIO">
            <video id="docVideo"
                src="https://res.cloudinary.com/ds6j6gokv/video/upload/v1751374404/Editied_one_55b16e4698.mp4" muted
                playsinline autoplay style="max-width: 100%; height: auto; border-radius: 10px; height: 100%;"></video>
        </div>
    </div>

</template>


<script>

export default {
    name: 'DocumentPixel',
}

</script>

<style>
.pixel_document_automation {
    width: 100%;
    margin: auto;
    background-color: #320157;
    padding: 2%;
    display: flex;
    gap: 20px;
    height: 360px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.pixel_perfect_h3 {
    font-family: 'Montserrat';
    color: white;
    font-weight: 600;
    font-size: 40px;
}


.pixel_perfect_span {
    color: white;
}

.pixel_document_automation div {
    flex: 1;

}

.docVideo_VEDIO {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}


@media screen and (max-width:750px) {

    .pixel_document_automation,
    .document-form-body,
    .document_slide_container_box {
        flex-direction: column;
        justify-content: center;
        height: fit-content;
        gap: 10px;

    }

    .pixel_perfect_h3,
    .document_form_wrapper h2 {
        font-size: 24px;
    }

    .docVideo_VEDIO {
        height: 200px;
    }

    .pixel_document_automation {
        padding: 5%;
    }
}
</style>
