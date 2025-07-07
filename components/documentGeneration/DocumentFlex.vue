<template>
    <div>
        <div class="streamline_header_part">
            <h2 class="so-left-first-part-h1" style="color: #252525;">

                Streamline your complete revenue process </h2>

            <span>DealDox goes beyond document automation. Learn how we support your top-line revenue growth. </span>
        </div>


        <div class="document_flex_container">


            <div class="document_flex_sub_container_child">

                <h3 class="document_flex_sub_h3">Generate error-free proposals and quotations </h3>

                <span class="document_flex_sub_span">You can integrate document generation with our CPQ solution to
                    effortlessly and automatically
                    create proposals, quotes, and invoices using accurate data from your CRM or ERP. </span>

            </div>
            <div class="document_flex_sub_container_child">

                <h3 class="document_flex_sub_h3">Simplify contract creation </h3>

                <span class="document_flex_sub_span">When a deal is closed, your team can effortlessly create contracts
                    from pre-built templates
                    and send them for to your clients, all within the same platform, using accurate and updated
                    data. </span>

            </div>


        </div>



    </div>


</template>
<script>
export default {
    name: 'DocumentFlex'
}

</script>

<style>
.streamline_header_part {
    margin: auto;
    margin-bottom: 50px;
    width: 93%;

}


.document_flex_container {
    display: flex;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    position: relative;
    height: fit-content;
    margin: auto;
    gap: 30px;
    height: 300px;
}


.document_flex_sub_container_child {
    flex: 1;
    position: relative;
    z-index: 10;
    background-color: #320157;
    border: 0.1px solid #ccc;
    padding: 20px;
    height: 200px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
}


.document_flex_container::before {
    width: 80%;
    content: "";
    border: 0.1px solid #320157;
    position: absolute;
    height: 300px;
    border-radius: 10px;


}

.document_flex_sub_span {
    color: white;
    font-size: 14px;
}

.document_flex_sub_h3 {
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 24px;
    color: white;

}


@media screen and (max-width:750px) {
    .streamline_header_part {
        text-align: center;
    }
}
</style>