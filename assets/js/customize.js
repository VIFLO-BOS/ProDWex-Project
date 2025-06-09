// PARTNER CODE START HERE....
import { organizations, institutions } from "./data.js";

const grid_org = document.getElementById("grid-organization");
const grid_ins = document.getElementById("grid-institution");
const orgCtn = document.getElementById("orgCtn");
const insCtn = document.getElementById("insti");
const orgUrl = document.querySelectorAll("#orgUrl");
const insUrl = document.querySelectorAll("#insUrl");

function renderCard(data, container) {
	if (container) {
		for (let i = 0; i < data.length; i++) {
			const col = document.createElement("div");
			const card_ctn = document.createElement("div");
			const card_img_ctn = document.createElement("div");
			const card_Logo = document.createElement("img");
			const card_title = document.createElement("h6");
			const card_footer = document.createElement("div");
			const intent = document.createElement("small");
			const numsOffollowers = document.createElement("small");
			const followBtn = document.createElement("button");
			const card = document.createElement("div");

			card_Logo.src = data[i].logoUrl;
			card_title.textContent = `${data[i].name} - Nigeria Limited`;
			intent.textContent = data[i].intent;
			numsOffollowers.textContent = data[i].numOffollower;
			followBtn.textContent = data[i].follow;

			card_footer.appendChild(intent);
			card_footer.appendChild(numsOffollowers);
			card_footer.appendChild(followBtn);
			card_img_ctn.appendChild(card_Logo);
			card_img_ctn.appendChild(card_title);
			card_ctn.appendChild(card_img_ctn);
			card_ctn.appendChild(card_footer);
			card.appendChild(card_ctn);
			col.appendChild(card);
			container.appendChild(col);

			// style
			followBtn.className = "btn btn-primary btn-xs";
			card_Logo.style = "width:50px; height:auto; object-fit:cover";
			card_title.style.textTransform = "uppercase";
			// card_title.className = "fw-2 small";
			col.className = "col-md-4 col-lg-3 org-card mt-5";
			card_ctn.className = "card-body";
			card.className = "card org-card";
			card_img_ctn.className = "d-flex align-items-center";
			card_footer.className =
				"d-flex align-items-center justify-content-between pt-2";
		}
	}
}

window.addEventListener("load", () => {
	renderCard(organizations, grid_org);
	renderCard(institutions, grid_ins);
});

function togglePartnersOrg() {
	orgCtn.classList.add("hidden");
	insCtn.classList.remove("hidden");
	insCtn.classList.add("visible");
}

function togglePartnersIns() {
	insCtn.classList.remove("visible");
	insCtn.classList.add("hidden");
	orgCtn.classList.toggle("hidden");
}

window.addEventListener("DOMContentLoaded", () => {
	insUrl.forEach((item) => {
		item.addEventListener("click", () => {
			togglePartnersOrg();
			grid_ins.innerHTML = "";
			renderCard(institutions, grid_ins);
		});
	});

	orgUrl.forEach((item) => {
		item.addEventListener("click", () => {
			togglePartnersIns();
			grid_org.innerHTML = ""; // Clear previous content
			renderCard(organizations, grid_org);
		});
	});
});

// navbar-menu url for partners logic
if (
	document.getElementById("grid-org-menu") ||
	document.getElementById("grid-insti-menu")
) {
	document.getElementById("grid-org-menu").addEventListener("click", () => {
		window.location.href = './partner.html'
	});
	document.getElementById("grid-insti-menu").addEventListener("click", () => {
		togglePartnersOrg();
	});
}

// PARTNER CODE ENDS HERE....

// BLOG & EVENT LOGIC START HERE...
const blogBtn = document.querySelector("#blogbreadcrumb");
const eventBtn = document.querySelector("#eventbreadcrumb");
blogBtn.style.cursor = "pointer";
eventBtn.style.cursor = "pointer";

if (blogBtn || eventBtn) {
	blogBtn.addEventListener("click", () => {
		window.location.href = "/blog.html";
	});
	eventBtn.addEventListener("click", () => {
		window.location.href = "/events.html";
	});
}
// BLOG & EVENT LOGIC ENDS HERE...
