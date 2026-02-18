/* ================= POSTS DATA ================= */
const posts = [
    /* --- HOME PAGE --- */
    { page: "home", title: "Start Your Fitness Journey the Right Way", image: "/assets/images/home1.webp", url: "/beginner-fitness-guide/", summary: "Embarking on a fitness journey often feels overwhelming. Learn how to build a sustainable routine." },
    { page: "home", title: "Why Consistency Beats Motivation", image: "/assets/images/home2.webp", url: "/consistency-vs-motivation/", summary: "Motivation gets you started, but consistency keeps you going..." },
    { page: "home", title: "Simple Habits That Improve Health", image: "/assets/images/home3.webp", url: "/health-habits-longevity/", summary: "Achieving better health doesn't require a total overhaul. Discover simple, science-backed habits." },
    { page: "home", title: "Fitness Is a Lifestyle, Not a Shortcut", image: "/assets/images/home4.webp", url: "/fitness-lifestyle-longevity/", summary: "Stop chasing 30-day transformations. Achieve sustainable health and metabolic flexibility." },
    { page: "home", title: "How to Stay Active With a Busy Schedule", image: "/assets/images/home5.webp", url: "/busy-schedule-exercise-snacks/", summary: "No time for the gym? Discover how to integrate 'exercise snacks' into your busy workday." },
    { page: "home", title: "The Importance of Quality Sleep", image: "/assets/images/home6.webp", url: "/importance-of-sleep-recovery/", summary: "Sleep is the foundation of progress. Learn how deep rest repairs muscles and balances hormones." },

    /* --- WORKOUT PAGE --- */
    { page: "workout", title: "Full Body Bodyweight Routine", image: "/assets/images/workout1.webp", url: "/full-body-bodyweight-routine/", summary: "No gym? No problem. Master calisthenics to build strength using only gravity." },
    { page: "workout", title: "The Power of Deadlifts", image: "/assets/images/workout2.webp", url: "/deadlift-mastery-strength-guide/", summary: "Master the hip hinge, protect your spine, and build an unbreakable posterior chain." },
    { page: "workout", title: "HIIT: Maximize Fat Burn", image: "/assets/images/workout3.webp", url: "/hiit-fat-burn-metabolism/", summary: "Learn how HIIT triggers the afterburn effect to melt fat in record time." },
    { page: "workout", title: "Yoga for Athletes and Lifters", image: "/assets/images/workout4.webp", url: "/yoga-for-athletes-mobility-guide/", summary: "Improve your range of motion, prevent injuries, and speed up recovery." },
    { page: "workout", title: "Strength vs. Hypertrophy", image: "/assets/images/workout5.webp", url: "/strength-vs-hypertrophy-muscle-growth/", summary: "Learn the differences between training for power versus muscle size." },
    { page: "workout", title: "Core Stability: Beyond the Sit-up", image: "/assets/images/workout6.webp", url: "/core-stability-functional-strength/", summary: "Build functional stability and create a natural weight belt for heavy lifting." },

    /* --- NUTRITION PAGE --- */
    { page: "nutrition", title: "Protein: Building Block of Muscle", image: "/assets/images/nutrition1.webp", url: "/protein-muscle-metabolism-guide/", summary: "Learn how protein triggers synthesis and boosts metabolism through thermic effect." },
    { page: "nutrition", title: "Carbs are Fuel, Not the Enemy", image: "/assets/images/nutrition2.webp", url: "/carbs-fuel-performance-guide/", summary: "Learn how to use complex carbs to fuel your brain and power workouts." },
    { page: "nutrition", title: "Healthy Fats: Hormonal Health", image: "/assets/images/nutrition3.webp", url: "/healthy-fats-hormonal-health-guide/", summary: "Learn why fats are critical for your endocrine system and brain function." },
    { page: "nutrition", title: "The Truth About Intermittent Fasting", image: "/assets/images/nutrition4.webp", url: "/intermittent-fasting-science-strategy/", summary: "Learn how meal timing triggers autophagy and improves metabolic flexibility." },
    { page: "nutrition", title: "Hydration and Athletic Performance", image: "/assets/images/nutrition5.webp", url: "/hydration-athletic-performance-guide/", summary: "Optimize your electrolyte balance for peak strength and endurance." },
    { page: "nutrition", title: "Supplementation: What Actually Works?", image: "/assets/images/nutrition6.webp", url: "/evidence-based-supplement-guide/", summary: "Discover science-backed products like Creatine that actually provide an edge." },

    /* --- JOURNAL PAGE --- */
    { page: "journal", title: "Day 1: The First Step", image: "/assets/images/journal1.webp", url: "/day-1-sustainable-change-journal/", summary: "Follow along as I trade excuses for action, starting with a simple walk." },
    { page: "journal", title: "Reflections on My First Month", image: "/assets/images/journal2.webp", url: "/first-month-fitness-reflections/", summary: "Consistency beats intensity. Discover the power of Non-Scale Victories." },
    { page: "journal", title: "Dealing with a Setback", image: "/assets/images/journal3.webp", url: "/handling-fitness-setbacks-resilience/", summary: "Learn how to build a resilient 'Minimum Viable Plan' for life's hectic moments." },
    { page: "journal", title: "The Ultimate Recovery Bowl", image: "/assets/images/journal4.webp", url: "/salmon-quinoa-recovery-bowl-journal/", summary: "My favorite salmon and quinoa bowl designed for muscle recovery." },
    { page: "journal", title: "Reaching a Personal Best", image: "/assets/images/journal5.webp", url: "/reaching-personal-best-progressive-overload/", summary: "Discover how 12 weeks of consistency turned the impossible into a reality." },
    { page: "journal", title: "The Art of Balance", image: "/assets/images/journal6.webp", url: "/art-of-fitness-balance-lifestyle/", summary: "Discover how the 80/20 rule can make your health journey sustainable." }
];

/* ================= RENDERING LOGIC ================= */
function renderPosts(page) {
    const container = document.getElementById("posts");
    if (!container) return;

    const filteredPosts = posts.filter(post => post.page === page);

    if (filteredPosts.length === 0) {
        container.innerHTML = "<p>No posts available.</p>";
        return;
    }

    const html = filteredPosts.map((post) => `
        <a href="${post.url}" class="blog-post">
            <div class="image-container">
                <img src="${post.image}" alt="${post.title}" loading="lazy" width="300" height="200">
            </div>
            <div class="blog-content">
                <h2>${post.title}</h2>
                <p>${post.summary}</p> 
                <span class="read-article-link">READ ARTICLE &rarr;</span>
            </div>
        </a>
    `).join("");

    container.innerHTML = html;
}

/* ================= REVENUE MAXIMIZER ================= */
function refreshAdsForRevenue() {
    if (window.revbid) {
        window.revbid.queue = window.revbid.queue || [];
        window.revbid.queue.push(() => {
            window.revbid.requestAds();
        });
    }
}

/* ================= INITIALIZATION ================= */
document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;
    
    if (path.includes("workout")) renderPosts("workout");
    else if (path.includes("nutrition")) renderPosts("nutrition");
    else if (path.includes("journal")) renderPosts("journal");
    else renderPosts("home"); // Default to home for index.html or root

    // Ad refresh after 3 seconds
    setTimeout(refreshAdsForRevenue, 3000);
});