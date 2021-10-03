const data = [
  {
    name: "Rajat Tyagi",
    age: 20,
    city: "Bulandshahar",
    language: "java",
    image: "https://randomuser.me/api/portraits/men/79.jpg",
  },
  {
    name: "Nikhil Tyagi",
    age: 20,
    city: "Ghaziabad",
    language: "Python",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
  },
  {
    name: "Shubham Tyagi",
    age: 21,
    city: "Meerut",
    language: "C++",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Prabhat Tyagi",
    age: 5,
    city: "Ghaziabad",
    language: "c++",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Navya Goyal",
    age: 10,
    city: "Ghaziabad",
    language: "java",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
  },
  {
    name: "Anshika Goyal",
    age: 2,
    city: "Bulandshahar",
    language: "c",
    image: "https://randomuser.me/api/portraits/women/96.jpg",
  },
];

function cvIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}

const next = document.getElementById("next");
next.addEventListener("click", nextCv);

const candidates = cvIterator(data);
nextCv();

function nextCv() {
  const currentCandidate = candidates.next().value;
  let image = document.getElementById("image");
  let profile = document.getElementById("profile");

  if (currentCandidate != undefined) {
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
 <li class="list-group-item">Name : ${currentCandidate.name}</li>
 <li class="list-group-item">Age : ${currentCandidate.age} year old</li>
 <li class="list-group-item">Lives : ${currentCandidate.city}</li>
 <li class="list-group-item">Language : ${currentCandidate.language}</li>
</ul>`;
  } else {
    alert("End of candidate Application");
    window.location.reload();
  }
}
