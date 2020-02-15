![npm
version](https://badge.fury.io/js/%40larsroettig%2Freact-cookie-popup.svg)
![Travis
Status](https://travis-ci.org/larsroettig/react-cookie-popup.svg?branch=master)
![Coverage
Status](https://coveralls.io/repos/github/larsroettig/react-cookie-popup/badge.svg?branch=master)
![Greenkeeper
badge](https://badges.greenkeeper.io/larsroettig/react-cookie-popup.svg)

Is a small React TypeScript Module allows to render a cookie popup based
on Tailwind CSS.

Example Styling
===============

![react\_modal](https://raw.githubusercontent.com/larsroettig/react-cookie-popup/master/doc/react_modal.png)

**A full Demo can you find here:**
<https://github.com/larsroettig/react-cookie-popup-demo>

Installation
============

    yarn add @larsroettig/react-cookie-popup

or npm

    npm i @larsroettig/react-cookie-popup

Components
----------

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>Component Names</p></td>
<td><p>Function</p></td>
</tr>
<tr class="even">
<td><p>CookiePopup</p></td>
<td><p>The PopUp Element</p></td>
</tr>
<tr class="odd">
<td><p>CookieImprintButton</p></td>
<td><p>Shows a button to revoke the user decision for the imprint deletes all cookie</p></td>
</tr>
<tr class="even">
<td><p>CookieButton</p></td>
<td><p>Simple Tailwind Button Element with a clickCallback</p></td>
</tr>
</tbody>
</table>

**You can import the CookiePopup like this:**

    import {CookiePopup} from "@larsroettig/react-cookie-popup";

**How to use the CookiePopup:**

    <CookiePopup>
        <section>
            <h4 className="py-5 text-xl">
                   A very nice Cookie Message
            </h4>
        </section>
    </CookiePopup>

Contribute
----------

**Installation:**

    git clone git@github.com:larsroettig/react-cookie-popup.git
    yarn install

**Execute Tests:**

    git clone git@github.com:larsroettig/react-cookie-popup.git
    yarn install
    yarn test:watch
