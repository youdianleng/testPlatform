<template>
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    </head>
    <div class="container-fluid p-0">
        <!-- Information and Information CarouselBar -->
        <section class="">
            <div class="row col-12 m-0 box1">
                <div class="row text-white col-12">
                    <h2 class="d-flex justify-content-center mainTextH2 fw-bold">Humanality Evolution with Test and Try, Much Time humans dosen't have chance to try but always 
                        have chance for Test, Let do the test and prepare for your future try.
                    </h2>
                    <div class="d-flex col-12 justify-content-center">
                        <Button class="col-3 buttonStartTesting fw-bold" label="Get started - It's Free" />
                    </div>
                </div>
            </div>
        </section>

        <section class="box2 pb-5">
            <!-- MoveBar of the Test List -->
            <div class="row  m-0 " id="movingBar"  ref="carouselWrapper">
                <div class="col-12 text-white ">
                    <div class="padding-200 pt-0 pb-5">
                        <h2 class="d-flex justify-content-center mainTextH2 fw-bold">WHAT CAN WE OFFER</h2>
                        <p class="fs-1">We will provide you with a variety of question banks to test your knowledge, and you can also become a question bank creator, 
                            making your question banks private or public for other students.</p>
                    </div>
                    <div class="informationPropose col-12 d-flex">
                        <div class="d-flex justify-content-around col-12 p-5 mb-5">
                            <div class="explainPropose border border-dark col-12">
                                <div class="imgContent col-12">
                                    <img src="/img/informaticImg.png" width="100%">
                                </div>
                                <div class="content col-12">
                                    <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor 
                                        (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. </p>
                                </div>
                                <div class="hrefLink col-12">
                                    <a></a>
                                </div>
                            </div>
                            <div class="explainPropose border border-dark col-12">
                                <div class="imgContent col-12">
                                    <img src="/img/informaticImg.png" width="100%">
                                </div>
                                <div class="content col-12"></div>
                                <div class="hrefLink col-12"></div>
                            </div>
                            <div class="explainPropose border border-dark col-12" >
                                <div class="imgContent col-12">
                                    <img src="/img/informaticImg.png" width="100%">
                                </div>
                                <div class="content col-12"></div>
                                <div class="hrefLink col-12"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


       <div class="divineLine"></div>
        <section>
        <!-- Comment Bar -->
            <div class="d-flex justify-content-around box3 relativeBox pb-5 ">
                <div>
                    <div class="col-12 text-white pt-5 ps-5 pe-5 d-flex justify-content-around">         
                        <div class="padding-200 padding-top-100 col-12 justify-content-center "> 
                            <div class="mb-5 col-12 d-flex justify-content-center">
                                <div class="col-1 tagBar">Comment</div>
                            </div>
                            <h2 class="d-flex justify-content-center mainTextH2 fw-bold">Our Customer Comment</h2>
                            <p class="fs-1">After using our Test Platform many peoples have complete his enterview with
                                a excelent experience.
                            </p>
                        </div>
                        
                    </div>
                    <div class="col-12 d-flex justify-content-center pb-5">
                        <div id="carouselExample" class="carousel slide col-12 p-5  padding-top-None padding-bottom-None">
                            <div class="carousel-inner">
                                <div class="carousel-item d-flex justify-content-center active">
                                    <div class='commentContentBox d-flex justify-content-center padding-top-None  padding-bottom-None' width="800" height="400">
                                        <div class="col-10 commentContent d-flex align-items-center justify-content-center">
                                            <div class="col-12 d-flex height100 p-3">
                                                <div class="col-12 height100 text-white d-grid gridContent">
                                                    <div class="col-12 d-flex justify-content-start">
                                                        <img src="/img/Logo2.svg" class="img-fluid CommentLogo" alt="...">
                                                    </div>
                                                    <div class="col-12 commentText text-white">
                                                        <p class="text-start ">''Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos'' </p>
                                                        
                                                    </div>
                                                    <div class="col-12 d-flex">
                                                        <div class="userImageBox">
                                                            <div class="userImage"></div>
                                                        </div>
                                                        <div class="userDetail ms-3 d-flex align-items-center justify-content-start">
                                                            <div>
                                                                <div class="userName fw-bold text-start fs-5">Diana Montse Cate</div>
                                                                <div class="userCareer mb-3 text-start opacity-50 text-white-80 fs-6">Software Engineer</div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    
                                                    <div class="col-12 commentText text-white d-flex align-items-center">
                                                        <h3 class="d-flex justify-content-start moreComment">More Comment</h3>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item d-flex justify-content-center ">
                                    <div class='commentContentBox d-flex justify-content-center padding-top-None  padding-bottom-None' width="800" height="400">
                                        <div class="col-10 commentContent d-flex align-items-center justify-content-center">
                                            <div class="col-12 d-flex height100 p-3">
                                                <div class="col-12 height100 text-white d-grid gridContent">
                                                    <div class="col-12 d-flex justify-content-start">
                                                        <img src="/img/Logo2.svg" class="img-fluid CommentLogo" alt="...">
                                                    </div>
                                                    <div class="col-12 commentText text-white">
                                                        <p class="text-start ">''Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos'' </p>
                                                        
                                                    </div>
                                                    <div class="col-12 d-flex">
                                                        <div class="userImageBox">
                                                            <div class="userImage"></div>
                                                        </div>
                                                        <div class="userDetail ms-3 d-flex align-items-center justify-content-start">
                                                            <div>
                                                                <div class="userName fw-bold text-start fs-5">Diana Montse Cate</div>
                                                                <div class="userCareer mb-3 text-start opacity-50 text-white-80 fs-6">Software Engineer</div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    
                                                    <div class="col-12 commentText text-white d-flex align-items-center">
                                                        <h3 class="d-flex justify-content-start moreComment">More Comment</h3>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="divineLine"></div>
        <section>
            <div class="box3">
                <div class="col-12 text-white pt-5 ps-5 pe-5 d-flex justify-content-around">         
                    <div class="padding-200 padding-top-100 col-12 justify-content-center "> 
                        <div class="mb-5 col-12 d-flex justify-content-center">
                            <div class="col-1 tagBar">Types</div>
                        </div>
                        <h2 class="d-flex justify-content-center mainTextH2 fw-bold">Types of Test you should interest</h2>
                        <p class="fs-1">We provide many differents types of test that help you to get prepare to the enterview or for start to learn new things
                        </p>
                    </div>
                </div>
                <div class=" typeBox col-12 d-flex justify-content-center">
                    <div class="d-grid gridContent col-8 ">
                        <div class="typeBoxContent bg-white p-5">
                            <div class="java d-flex justify-content-start">
                                <img src="/img/types/java-logo.png" height="40px" width="40px"> 
                            </div>
                            <div></div>
                        </div>
                        <div class="typeBoxContent bg-white p-5">
                            <div class="sql d-flex justify-content-start">
                                <img src="/img/types/sql-server.png" height="40px" width="40px"> 
                            </div>
                            <div></div>
                        </div>
                        <div class="typeBoxContent bg-white p-5">
                            <div class="react d-flex justify-content-start">
                                <img src="/img/types/atom.png" height="40px" width="40px"> 
                            </div>
                            <div></div>
                        </div>
                        <div class="typeBoxContent bg-white p-5">
                            <div class="vue3 d-flex justify-content-start">
                                <img src="/img/types/vuejs.png" height="40px" width="40px"> 
                            </div>
                            <div></div>
                        </div>
                        <div class="typeBoxContent bg-white p-5">
                            <div class="javascript d-flex justify-content-start">
                                <img src="/img/types/java-script.png" height="40px" width="40px"> 
                            </div>
                            <div></div>
                        </div>
                        <div class="typeBoxContent bg-white p-5">
                            <div class="python d-flex justify-content-start">
                                <img src="/img/types/python.png" height="40px" width="40px"> 
                            </div>
                            <div></div>
                        </div>
                        <div class="typeBoxContent bg-white p-5">
                            <div class="php d-flex justify-content-start">
                                <img src="/img/types/web.png" height="40px" width="40px"> 
                            </div>
                            <div></div>
                        </div>
                        <div class="typeBoxContent bg-white p-5">
                            <div class="html5 d-flex justify-content-start">
                                <img src="/img/types/html.png" height="40px" width="40px"> 
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div> 
            </div>
        </section>
    </div>

    
</template>


<style scoped>
@import '/resources/css/HomePage.css';
@import '/resources/css/app.css';

</style>


<script>
import { ProductService } from 'D:/Yupi_Proyect/Vue3TestWeb/testPlatformLaravel/src/ProductService.js';
import { ref, onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import * as yup from 'yup';
import { es } from 'yup-locales';
import { setLocale } from 'yup';

export default{
    setup(){
        const products = ref();
        const strSuccess = ref();
        const strError = ref();
        const users = ref([]);
        const index = ref(0);
        const carouselWrapper = ref([]);
        let items = [];



        onMounted(() => {
            ProductService.getProducts().then((data) => (products.value = data.slice(0, 9)));
            axios.get('/api/index')
                .then(response => {
                    users.value = response.data.data;

                    setInterval(() => moveCarousel(), 2000);
                })
                .catch(function (error) {
                    console.log(error);
                }); 
        })


        const moveCarousel = () =>{


            if (carouselWrapper.value.length === 0) {
                console.error('carouselWrapper is empty');
                return;
            }
            index.value++;
            const totalItems = users.value.length;

            if(index.value > totalItems - 1){
                index.value = 0;
            }

            if (carouselWrapper.value) {
                carouselWrapper.value.style.transform = `translateX(-${index.value * 100 / totalItems}%)`;

                if (index.value === totalItems - 1) {
                    setTimeout(() => {
                        if (carouselWrapper.value) {
                            carouselWrapper.value.appendChild(carouselWrapper.value.firstElementChild);  // Move first item to the end
                            carouselWrapper.value.style.transition = 'none';  // Disable transition temporarily
                            carouselWrapper.value.style.transform = 'translateX(0)';  // Reset position
                            index.value = 0;
                            carouselWrapper.value.style.transition = 'transform 0.5s ease';  // Re-enable transition
                        }
                    }, 500);
                }
            }
        };


        const flipCard = (x) =>{
            let flipCardObject = document.getElementById("flip" + x);
            let backImageObject = document.getElementById("backImage" + x);
            let hoverCard = false;

            flipCardObject.style.transform = "rotateY(180deg)";
            backImageObject.style.transform = "rotateY(-180deg)";


            flipCardObject.addEventListener("mouseenter",() => {
                hoverCard = true;

            });

            flipCardObject.addEventListener("mouseleave",() => {
                hoverCard = false;

            });

            setInterval (() =>{
                if(!hoverCard){
                    flipCardObject.style.transform = "rotateY(360deg)";
                }
            },5000);
        }

        onMounted(() => {
            // Make sure carouselWrapper is initialized and accessible
            moveCarousel();
        });


        return{
            users,
            products,
            carouselWrapper,
            flipCard
        
        }
    }


}



</script>