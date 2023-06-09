<script>
  const testimonials = [
    {
      author: "Nat & Belle",
      testimonial: "Mike has been looking after my pooch Belle for the past 5 years, since she was 3. He has loved her like she was his own and sometimes I think she would prefer to be with him than be at home. She gets over excited when she sees him and sulks when she comes home. When I was heavily pregnant Mike came to my rescue and would take Belle for long walks, quite often on a Sunday and during the weeks too. He continued to do this for me when I had my little one and still collects her now whilst I work. Mike is a dog lover and I'm hoping the bond with my pooch is what has inspired him to start his own business, I just hope he never gets too busy for her. Mike is I lovely man and if I was ever to get a pup again, he would be the first person I call upon."
    },
    {
      author: "Caz & Tia",
      testimonial: "I wholeheartedly recommend Mike Lilley for any of your pet needs; he has looked after my black Labrador on numerous occasions and I fully trust him. Being an ex-veterinary nurse of 23 years I am very particular with whom I entrust to look after my pets but I have no concerns whatsoever with Mike. Tia always has a great time in his company and they go for lots of walks together; she is always in very caring and capable hands."
    },
    {
      author: "Amanda Nayr",
      testimonial: "It has been such a relief to have been able to leave Titch in safe hands, whilst we were away on holiday. Mike and Dani’s love for dogs is very clear to see, he was made to feel comfortable and part of the family from day one! It’s also been great to see the daily updates provided on what Titch has been up to each day! I think Titch will genuinely miss Mike, Dani, Zabba and Jett (it’s been like a mini holiday for him too!). Thank you so much, we will definitely be calling upon you again for any future holidays!"
    },
    {
      author: "Louise Lathrope",
      testimonial: "So pleased to have had Hound walker recommended to us, I never find it easy leaving Rufus but with daily updates and photos of his adventures with Mike and Dani and their beautiful dogs totally put our minds at ease as we could see what a fabulous time he was having also watching his confidence grow especially with bigger dogs was fantastic.We will definitely be using Hound walker again."
    },
    {
      author: "Shai Hussain",
      testimonial: "We haven't been to a bonfire in 4 years due to having Lola who is a timid dog who’s petrified of fireworks so cannot be left alone; until last night when Mike and Dani had her for the evening. Lola was collected from our home address, her dietary needs were met and she had a lovely evening socialising with other dogs in the comfort of Hound Walker HQ 👌🏼 They were very patient with Lola who likes lots of reassurance and affection and we were sent regular updates and pics throughout the evening as she has never been left with someone else before. A good quality service and excellent value for money! Would definitely use again."
    },
    {
      author: "Adam Cowpland",
      testimonial: "Can't recommend mike& his partner enough, never seen someone with so much passion for dogs! Will defo be bringing Harvey back to him. Harvey doesn’t trust many people and can be a pain but he took to mike an his pack the second he got picked up! Even taught us that our boys a swimmer"
    },
    {
      author: "Lauren",
      testimonial: "I spent a fair amount of time searching for the perfect place for our puppy to stay when we were away & landed upon Mike's page. Mike & Dani made lots of effort to arrange meet ups before Rufus went to stay with them for his holidays, this made sure he knew where he was going & that they were comfortable with each other. We were impressed with the set up & clear love Mike has for dogs. Rufus has just returned from his first holiday with Mike & Dani and my husband had to pretty much drag him out! It's lovely to see pictures of their adventures on Facebook & Mike is always quick to respond if you message him. Thanks again, Rufus is looking forward to his next holiday!"
    },
    {
      author: "Alice",
      testimonial: "We left our two whippets for the first time with Mike. Mike sent us photos of Gypsy and Max on walks which put our minds at rest. They have been so well looked after in a home from home. Long walks and lots of play time. We would recommend Hound Walker 100% Thank you Mike. We will definitely be bringing our Whippets to Stay with you again."
    },
    {
      author: "Angela",
      testimonial: "A thank you to Mike, we left our two dogs with him they were well cared for lots of love and cuddles and had some good walks . Though facebook I keep in touch Mike posted their walks every day. Will definitely recommend hound walker to people"
    },
    {
      author: "Rachel",
      testimonial: "Could not recommend Hound Walker enough. Mike, Dani and family are brilliant with the dogs. Left my 11 month old puppy with them whilst I went away on holiday for one week. Was nervous about leaving my dog for the first time however Mike and Dani made me feel so reassured that everything was fine whilst I was away. The pictures/posts that they put on every evening regarding the walks they have been on is something to look forward too and is just that special touch in making a dog owner feel at ease as they can see what their dog has been up to during the day! Their house has its own dog room with plenty of sofas and space for the dogs to roam free and have nap time. The fact Mike and Dani both also sent me personal texts too regarding what my dog was getting up to also made me feel at ease knowing my puppy was okay. This allowed me to be able to relax more on holiday. You can tell that Mike is very passionate about dogs and cares for them completely. On hot days will walk the dogs in the morning and around water so the dogs don’t dehydrate or get heat stroke. I am extremely picky with where my dog stays because he is completely spoiled and I wanted him to go to a home of high standard that could spoil and care for him just as much as me. I looked at several other dog boarders before I found Mike and Dani and straight away knew they was perfect. Really could not recommend enough to anyone. Far better than putting your dog in kennels as they truly are getting the time and attention here. There is absolutely no time for your dog to get bored because there are several other dogs sleeping over, dogs being walked and dogs in day care at their house. They also have their own two dogs so it is constant play time in Mike and Dani’s household. Your dog will be tired out by the end of it. I can not think of a single fault about Hound Walker. 10/10 and would definitely use them again. Thank you so much."
    },
    {
      author: "Irene",
      testimonial: "Would like to say a big Thank You to Mike for having Daisy for holidays, was a bit sceptical about her with bigger dogs but she fitted in well and had a brill time. Highly recommended, will definitely use Again! She’s slept since she come home"
    },
    {
      author: "Danny, Lia & Dennis",
      testimonial: "We left our little boy with Mike & Dani for the first time last week whilst we went on holiday. From the first time we met Mike & Dani we could see their passion for dogs and how comfortable our boy was when he met them. We had daily updates on his walks and adventures and couldn't believe how happy he seemed. His confidence around groups of other dogs and social skills have improved massively and we can only thank Mike & Dani for this improvement. We would highly recommend Hound Walker for boarding, walks and anything else you require. Thank you very much Mike & Dani."
    },
    {
      author: "Sean",
      testimonial: "Our dog Marley is always happy to be in the company of Mike, Dani and their two pups and so are we as we know he is well looked after with them! Mike offers a very professional, caring and friendly service. Which gives us peace of mind when we have to leave our dog in his care. We highly recommend the Hound Walker!"
    },
    {
      author: "Hayley",
      testimonial: "Really pleased with how our girls have been looked after over the past week. It was great to see pictures of them daily from the walks they’ve been on and also great to see them off the leads. Mike had great confidence with the pups!! Would definitely use this service again. Thanks again, Bella and Winnie are well and truly goosed!!"
    },
    {
      author: "Jessica",
      testimonial: "Fabulous service, my pooch Storm has such a great time with all the other dogs! Mike is a natural"
    },
  ]
</script>

<style>
  .testimonials {
    list-style: none;
    width: 100%;
    padding: 0;
    display: flex;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
  }

  .service {
    margin: 0 20px 0 0;
    background: var(--color-grey);
    display: flex;
    flex: 0 0 calc(100%/4 + 45px);
    width: calc(100%/4 + 45px);
    flex-flow: column;
    padding: 20px;
    text-align: left;
    max-height: 250px;
    overflow: hidden;
    scroll-snap-align: start;
  }

  .service:last-child {
    margin: 0;
  }
</style>

<ul class="testimonials">
	{#each testimonials as { author, testimonial }, i}
		<li class="service">
      <p>{testimonial}</p>
    </li>
  {/each}
</ul>