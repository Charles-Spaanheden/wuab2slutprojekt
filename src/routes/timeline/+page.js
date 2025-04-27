// +page.js
import { dev } from '$app/environment';

export const csr = dev;
export const prerender = true;

export async function load() {
    return {
        articles: {
            1: {
                title: "Canto I: The Outcast",
                body:"The story begins with the Sinners aboard Mephistopheles, a bus powered by Enkephalin, a substance derived from living humans. Their mission is to retrieve a Golden Bough from a buried Lobotomy Corporation (L Corp) branch in District 4. Yuri, a former L Corp employee, joins them as a guide. Along the way, they encounter insect-like individuals, former G Corp employees, who block their path. Tensions rise, leading to a confrontation."},
            2: {
                title: "Canto II: The Unfurling",
                body: "In this canto, the Sinners delve deeper into the L Corp branch facility. They encounter various Abnormalities and E.G.O. entities, remnants of L Corp's experiments. The team faces internal conflicts and external threats as they navigate the treacherous environment. Their primary objective remains the retrieval of the Golden Bough"
            },
            3: {
                title: "Canto III: The Unconfronting",
                body: "The Sinners arrive in District 11, aiming to claim the Golden Bough in Calw, Sinclair's hometown. They face immediate challenges, including an immigration checkpoint and the intervention of K Corp's star Fixer, Siegfried. Tensions escalate as they encounter the Nagel und Hammer Inquisition, who harbor a deep-seated hatred for prosthetic users. Upon reaching Calw, they discover the town's destruction at the hands of the Inquisitors."
            },
            4: {
                title: "Canto IV: The Unchanging",
                body: "The Sinners discover an Abnormality rampaging through District 11 and manage to suppress it. They reach the K Corp building and meet its Branch Manager, Dongrang, who promises to give them the Golden Bough as per their contract. However, the building is attacked by the Technology Liberation Alliance (TLA), leading to a battle with various enemies, including L Corp E.G.O. users and a hybrid Workshop/Office entity. Dongbaek, a member of the TLA and acquaintance of Yi Sang, reveals herself to have the Bough and stabs him before leaving."
            },
            5: {
                title: "Canto V: The Evil Defining",
                body: "The Sinners embark on a journey across the Great Lake to locate the Golden Bough. They encounter Ishmael, who is haunted by her past with the Pallid Whale. The team faces various challenges, including pirates and the treacherous laws governing the Great Lake. They eventually reach the L Corp building, only to find that it has been swallowed by the Pallid Whale, along with the Golden Bough."
            }
        }
    };
}
