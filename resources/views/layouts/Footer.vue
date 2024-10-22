<template>
    <div class="container-fluid p-0">
        <div class="contentBox d-flex justify-content-center align-items-center">
            <div class="d-flex middleBox justify-content-center mt-5 mb-5">
                <svg>
                    <image height="70%"  width="100%"  href="/img/Logo.svg"  />
                </svg>
                <div class="row contents15 border-start ">
                    <div class="information text-white mb-2">
                        <h5 class="fw-bold">Information</h5>
                        <div class="row">
                            <a href="#">Tests Contents</a>
                            <a href="#">Page Contents</a>
                            <a href="#">More Details</a>
                        </div>
                    </div>
                    <div class="information  text-white">
                        <h5 class="fw-bold">About Us</h5>
                        <div class="row">
                            <a href="#">Tests Contents</a>
                            <a href="#">Page Contents</a>
                            <a href="#">More Details</a>
                        </div>
                    </div>
                </div>
                <div class="row contents15 border-start">
                    <div class="information  text-white mb-2">
                        <h5 class="fw-bold">Privacity</h5>
                        <div class="row">
                            <a href="#">Tests Contents</a>
                            <a href="#">Page Contents</a>
                            <a href="#">More Details</a>
                        </div>
                    </div>
                    <div class="information text-white ">
                        <h5 class="fw-bold">Social Networks</h5>
                        <div class="row">
                            <a href="#">Tests Contents</a>
                            <a href="#">Page Contents</a>
                            <a href="#">More Details</a>
                        </div>
                    </div>
                </div>
                <div class="row contents30 border-start">
                    <div class="suscription  text-white mb-2">
                        <h5 class="fw-bold">Suscription</h5>
                        <div class="d-flex">
                            <InputText class="suscript" placeholder="Enter Your Email"></InputText>
                            <button class="suscript suscriptButton ms-2">Subscribe</button>
                        </div>
                    </div>
                    <div class="suscription  text-white">
                        <h5 class="fw-bold">Contact Us</h5>
                        <div class="row ">
                            <p class="m-0">Adress: Spain, Barcelona, Calle xxxx, Numero 22</p>
                            <p class="m-0">Phone Number: 900909090</p>
                            <p class="m-0">Business Number: 900909090</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <hr class="border border-white border-1 m-0">
        </div>
        
        <div class="d-flex justify-content-center ">
            <p class="m-0 pt-3 pb-3 text-white"> &#169; 2024 Test Platform. All rights reserved. </p>
        </div>
    </div>
   

</template>

<style scoped>

.container-fluid{
    width: 100%;
    height: auto;
    background-color: black;
}

.contentBox{
    height: 100%;
}

.middleBox{
    width: 100%;
}

a{
    text-decoration: none;
    font-size: 15px;
    color: white;
}

.contents15{
    width: 15%;
}

.contents30{
    width: 30%;
}

.mark{
    width: auto;
    height: auto;
}
.suscription .suscript{
    border-radius: 30px;
    width: 60%;
}

.suscription .suscriptButton{
    width: 40%;
    border: 0px;
    padding: 0px;
    background-color: #5D2AF9;
    color: white;
}

.information, .suscription{
    height: 100px;
}
</style>

<script>
export default{

    setup(){


    }

}
</script>