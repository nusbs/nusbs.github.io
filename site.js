var site = new Vue({
    el:"#site",
    data:{
        team:[{
            role:"President",
            name:"ZhengAn",
            pic:"assets/ppl_6.jpg"
        },{
            role:"Secretary",
            name:"Cluadia",
            pic:"assets/ppl_4.jpg"
        },{
            role:"Deputy Secretary",
            name:"XinMin",
            pic:"assets/ppl_5.jpg"
        },{
            role:"Resource Director",
            name:"HuQuee",
            pic:"assets/ppl_2.jpg"
        },{
            role:"Marketing Director",
            name:"Alecs",
            pic:"assets/ppl_1.jpg"
        },{
            role:"Dharma Director",
            name:"ShuPeng",
            pic:"assets/ppl_3.jpg"
        }],
        team_id:0,

        adv:[{
            name:"Bhante Dhammaratana",
            place:"Buddhist Library",
            pic:"assets/adv_1.jpg",
            desc:[
                "Born in Sri Lanka, Bhante received his ordination at 13. In 1973, he left for Dhammaduta activities in Singapore at the invitation of Ven. M. Mahavihara. In 2003, he obtained his Master of Philosophy Degree from Kelaniya University, Sri Lanka.",
                "Bhante is currently the present chief incumbent of Bellanwila Rajamaha, a well-established Buddhist template located close to Colombo in Sri Lanka."
            ]
        },{
            name:"Venerable Chun Hui",
            place:"Pao Kwan Foh Tang",
            pic:"assets/adv_2.jpg",
            desc:[
                "Venerable Chun Hui graduated with a BA degree in Arts and Social Science in NUS 1933. She was a school teacher for 3 years before taking up robes in 1997. After ordination in Taiwan, she when to Sri Lanka in 1998 to further her Buddhist studies.",
                "Venerable is a resident nun at Pao Kwan Foh Tang and presently conducts English Buddhism course at Phor Kark See Monastry and Hua Giam Si."
            ]
        },{
            name:"Bhante Cittara",
            place:"Mangala Vihara",
            pic:"assets/adv_3.jpg",
            desc:[
                "Born in 1969, Myanmar, Benerable Cittara became a novice at 15 and was ordained at the age of 20. Venerable took a Religous Examination at 24 then underwent 3 years of practice in the forest.",
                "3 years ago, Venerable came to Singapore and currently resides in Mangala Vihara Buddhist Temple, and practises the Mahasi meditation technique under the Mahasi Meditation Center."
            ]
        },{
            name:"Venerable Gyurme",
            place:"Amitabha Buddhist Centre",
            pic:"assets/adv_4.jpg",
            desc:[
                "Venerable Gyurme received monastic ordination from His Holiness the Dalai Lama in 1999, shortly after graduating from NUS with a Bachelor of Arts degree. He receives training in FPMT Lotsawa Rinchen Zangpo Translator Program in Dharamasala, India.",
                "Since 2005, Venerable serves as Amitabha Buddhist Centre's Spiritual Programme Coordinator and Tibetan language interpreter, also teaching introductory and basic Buddhist courses at the centre."
            ]
        }],
        adv_id:0,

        events:[
            "assets/ppl_1.jpg",
            "assets/ppl_1.jpg",
            "assets/ppl_1.jpg"
        ],
        events_id:0
    }
});
