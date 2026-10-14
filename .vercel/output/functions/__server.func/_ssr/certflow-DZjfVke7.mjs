import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Play, c as Download, i as RotateCcw, l as Check, r as ShieldCheck, s as FileSpreadsheet } from "../_libs/lucide-react.mjs";
import { t as require_lib } from "../_libs/jszip+[...].mjs";
import { n as utils, r as writeSync, t as readSync } from "../_libs/xlsx.mjs";
import { n as StandardFonts, r as rgb, t as PDFDocument } from "../_libs/pdf-lib.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/certflow-DZjfVke7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_lib = /* @__PURE__ */ __toESM(require_lib());
var SAMPLE_HEADERS = [
	"Full name",
	"Email",
	"Level",
	"Completed",
	"Score"
];
var SAMPLE_ROWS = [
	{
		"Full name": "Amina Nkosi",
		Email: "amina.nkosi@example.com",
		Level: "English Level 1",
		Completed: "12 Sep 2026",
		Score: "92"
	},
	{
		"Full name": "James Okonkwo",
		Email: "james.okonkwo@example.com",
		Level: "English Level 1",
		Completed: "12 Sep 2026",
		Score: "88"
	},
	{
		"Full name": "Priya Naidoo",
		Email: "priya.naidoo@example.com",
		Level: "English Level 1",
		Completed: "13 Sep 2026",
		Score: "95"
	},
	{
		"Full name": "Liam van Wyk",
		Email: "not-an-email",
		Level: "English Level 1",
		Completed: "13 Sep 2026",
		Score: "81"
	},
	{
		"Full name": "Sofia Alvarez",
		Email: "sofia.alvarez@example.com",
		Level: "English Level 1",
		Completed: "14 Sep 2026",
		Score: "90"
	},
	{
		"Full name": "Chen Wei",
		Email: "chen.wei@example.com",
		Level: "English Level 1",
		Completed: "14 Sep 2026",
		Score: "86"
	},
	{
		"Full name": "Amina Nkosi",
		Email: "amina.nkosi@example.com",
		Level: "English Level 1",
		Completed: "12 Sep 2026",
		Score: "92"
	},
	{
		"Full name": "Noah Petersen",
		Email: "noah.petersen@example.com",
		Level: "English Level 1",
		Completed: "15 Sep 2026",
		Score: "79"
	},
	{
		"Full name": "Fatima El-Sayed",
		Email: "fatima.elsayed@example.com",
		Level: "English Level 1",
		Completed: "15 Sep 2026",
		Score: "97"
	},
	{
		"Full name": "Thabo Maseko",
		Email: "thabo.maseko@example.com",
		Level: "English Level 1",
		Completed: "16 Sep 2026",
		Score: "84"
	},
	{
		"Full name": "Elena Rossi",
		Email: "elena.rossi@example.com",
		Level: "English Level 1",
		Completed: "16 Sep 2026",
		Score: "91"
	},
	{
		"Full name": "Kwame Mensah",
		Email: "kwame.mensah@example.com",
		Level: "English Level 1",
		Completed: "17 Sep 2026",
		Score: "87"
	}
];
var HINTS = {
	name: [
		"name",
		"full name",
		"learner",
		"student",
		"fullname"
	],
	email: [
		"email",
		"e-mail",
		"mail"
	],
	course: [
		"course",
		"level",
		"programme",
		"program",
		"class",
		"module"
	],
	date: [
		"date",
		"completed",
		"completion",
		"issued"
	],
	score: [
		"score",
		"grade",
		"mark",
		"result"
	]
};
async function parseSheet(file) {
	const buf = await file.arrayBuffer();
	const book = readSync(buf, {
		type: "array",
		cellDates: true
	});
	const sheet = book.Sheets[book.SheetNames[0]];
	if (!sheet) return {
		headers: [],
		rows: []
	};
	const raw = utils.sheet_to_json(sheet, {
		header: 1,
		raw: false,
		defval: ""
	});
	const headerRow = (raw[0] ?? []).map((c) => String(c ?? "").trim());
	const headers = headerRow.filter(Boolean);
	const rows = [];
	for (const line of raw.slice(1)) {
		const row = {};
		let empty = true;
		headerRow.forEach((h, i) => {
			if (!h) return;
			const value = String(line?.[i] ?? "").trim();
			if (value) empty = false;
			row[h] = value;
		});
		if (!empty) rows.push(row);
	}
	return {
		headers,
		rows
	};
}
function guessMapping(headers) {
	const used = /* @__PURE__ */ new Set();
	const pick = (key) => {
		const hit = headers.find((h) => {
			if (used.has(h)) return false;
			const n = h.toLowerCase().trim();
			return HINTS[key].some((hint) => n === hint || n.includes(hint));
		});
		if (hit) used.add(hit);
		return hit ?? "";
	};
	return {
		name: pick("name"),
		email: pick("email"),
		course: pick("course"),
		date: pick("date"),
		score: pick("score")
	};
}
function rowsToWorkbook(rows, name) {
	const sheet = utils.json_to_sheet(rows);
	const book = utils.book_new();
	utils.book_append_sheet(book, sheet, name.slice(0, 31));
	const out = writeSync(book, {
		bookType: "xlsx",
		type: "array"
	});
	return new Blob([out], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
}
function downloadBlob(blob, filename) {
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = filename;
	a.click();
	URL.revokeObjectURL(url);
}
var EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function validEmail(value) {
	return EMAIL.test(value.trim());
}
function buildJobs(rows, mapping, fallbackCourse) {
	const seen = /* @__PURE__ */ new Set();
	return rows.map((row, index) => {
		const name = mapping.name && row[mapping.name] || "";
		const email = (mapping.email && row[mapping.email] || "").trim().toLowerCase();
		const course = (mapping.course && row[mapping.course] || fallbackCourse).trim();
		const date = mapping.date && row[mapping.date] || "";
		const score = mapping.score && row[mapping.score] || "";
		const key = `${email}|${course}|${date}`;
		const duplicate = email && seen.has(key);
		if (email) seen.add(key);
		const certId = `CERT-${String(index + 1).padStart(4, "0")}`;
		let status = "pending";
		let note = "Waiting";
		if (!name) {
			status = "failed";
			note = "Missing name";
		} else if (!validEmail(email)) {
			status = "failed";
			note = "Invalid email — will not send";
		} else if (duplicate) {
			status = "skipped";
			note = "Duplicate of an earlier row";
		}
		return {
			index,
			name,
			email,
			course,
			date,
			score,
			certId,
			status,
			attempts: 0,
			note
		};
	});
}
/** Deterministic "throttle" so the queue shows a retry instead of a dead run. */
function shouldThrottle(row, attempt) {
	return attempt === 1 && row.index % 7 === 3;
}
function subjectFor(row, brand) {
	return `${brand.org}: your ${row.course} certificate`;
}
var LAYOUTS = [
	{
		id: "classic",
		label: "Classic frame"
	},
	{
		id: "band",
		label: "Side band"
	},
	{
		id: "corner",
		label: "Corner marks"
	}
];
var PALETTES = [
	{
		id: "seal",
		label: "Seal",
		paper: "#fffdf8",
		ink: "#1c1915",
		accent: "#8c3a2f",
		mute: "#6f675c",
		rgb: {
			paper: [
				1,
				.992,
				.973
			],
			ink: [
				.11,
				.098,
				.082
			],
			accent: [
				.549,
				.227,
				.184
			],
			mute: [
				.435,
				.404,
				.361
			]
		}
	},
	{
		id: "navy",
		label: "Navy",
		paper: "#f7f5f1",
		ink: "#142033",
		accent: "#1e4d7b",
		mute: "#5c6878",
		rgb: {
			paper: [
				.969,
				.961,
				.945
			],
			ink: [
				.078,
				.125,
				.2
			],
			accent: [
				.118,
				.302,
				.482
			],
			mute: [
				.361,
				.408,
				.471
			]
		}
	},
	{
		id: "forest",
		label: "Forest",
		paper: "#f6f4ee",
		ink: "#1a241c",
		accent: "#2f5d45",
		mute: "#5e6b62",
		rgb: {
			paper: [
				.965,
				.957,
				.933
			],
			ink: [
				.102,
				.141,
				.11
			],
			accent: [
				.184,
				.365,
				.271
			],
			mute: [
				.369,
				.42,
				.384
			]
		}
	}
];
function paletteOf(id) {
	return PALETTES.find((p) => p.id === id) ?? PALETTES[0];
}
var W = 841.89;
var H = 595.28;
function wrap(text, max) {
	const words = text.split(/\s+/);
	const lines = [];
	let line = "";
	for (const word of words) {
		const next = line ? `${line} ${word}` : word;
		if (next.length > max && line) {
			lines.push(line);
			line = word;
		} else line = next;
	}
	if (line) lines.push(line);
	return lines.slice(0, 3);
}
function dataUrlBytes(dataUrl) {
	const comma = dataUrl.indexOf(",");
	if (comma < 0) return null;
	const b64 = dataUrl.slice(comma + 1);
	const bin = atob(b64);
	const bytes = new Uint8Array(bin.length);
	for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
	return bytes;
}
async function embedLogo(doc, dataUrl) {
	const bytes = dataUrlBytes(dataUrl);
	if (!bytes) return null;
	if (dataUrl.startsWith("data:image/png")) return doc.embedPng(bytes);
	if (dataUrl.startsWith("data:image/jpeg") || dataUrl.startsWith("data:image/jpg")) return doc.embedJpg(bytes);
	return null;
}
function centered(page, text, y, size, font, color) {
	const width = font.widthOfTextAtSize(text, size);
	page.drawText(text, {
		x: (W - width) / 2,
		y,
		size,
		font,
		color
	});
}
async function certificatePdf(row, brand) {
	const doc = await PDFDocument.create();
	const page = doc.addPage([W, H]);
	const serif = await doc.embedFont(StandardFonts.TimesRoman);
	const serifBold = await doc.embedFont(StandardFonts.TimesRomanBold);
	const sans = await doc.embedFont(StandardFonts.Helvetica);
	const pal = paletteOf(brand.palette);
	const ink = rgb(...pal.rgb.ink);
	const accent = rgb(...pal.rgb.accent);
	const mute = rgb(...pal.rgb.mute);
	const paper = rgb(...pal.rgb.paper);
	const logo = brand.logo ? await embedLogo(doc, brand.logo) : null;
	page.drawRectangle({
		x: 0,
		y: 0,
		width: W,
		height: H,
		color: paper
	});
	if (brand.layout === "band") page.drawRectangle({
		x: 0,
		y: 0,
		width: 18,
		height: H,
		color: accent
	});
	else if (brand.layout === "corner") {
		const m = 28;
		for (const [x1, y1, x2, y2] of [
			[
				m,
				567.28,
				64,
				567.28
			],
			[
				m,
				567.28,
				m,
				531.28
			],
			[
				813.89,
				567.28,
				777.89,
				567.28
			],
			[
				813.89,
				567.28,
				813.89,
				531.28
			],
			[
				m,
				m,
				64,
				m
			],
			[
				m,
				m,
				m,
				64
			],
			[
				813.89,
				m,
				777.89,
				m
			],
			[
				813.89,
				m,
				813.89,
				64
			]
		]) page.drawLine({
			start: {
				x: x1,
				y: y1
			},
			end: {
				x: x2,
				y: y2
			},
			thickness: 1.4,
			color: accent
		});
	} else {
		page.drawRectangle({
			x: 22,
			y: 22,
			width: 797.89,
			height: 551.28,
			borderColor: ink,
			borderWidth: 1.4
		});
		page.drawRectangle({
			x: 30,
			y: 30,
			width: 781.89,
			height: 535.28,
			borderColor: accent,
			borderWidth: .6
		});
	}
	if (logo) {
		const scale = Math.min(44 / logo.width, 44 / logo.height);
		const w = logo.width * scale;
		const h = logo.height * scale;
		const x = brand.logoSide === "right" ? 785.89 - w : 56;
		page.drawImage(logo, {
			x,
			y: 547.28 - h,
			width: w,
			height: h
		});
	}
	const orgY = logo ? 487.28 : 517.28;
	centered(page, brand.org.toUpperCase(), orgY, 11, sans, accent);
	centered(page, "CERTIFICATE OF COMPLETION", orgY - 28, 10, sans, mute);
	const name = row.name || "Learner";
	const nameSize = name.length > 28 ? 32 : 42;
	centered(page, name, orgY - 92, nameSize, serifBold, ink);
	centered(page, "has completed", orgY - 128, 14, serif, mute);
	const courseLines = wrap(row.course || "English Level 1", 42);
	let cy = orgY - 168;
	for (const line of courseLines) {
		centered(page, line, cy, 22, serifBold, ink);
		cy -= 28;
	}
	centered(page, [
		row.date,
		row.score ? `Score ${row.score}` : "",
		row.certId
	].filter(Boolean).join("   ·   "), 168, 11, sans, mute);
	page.drawLine({
		start: {
			x: 92,
			y: 128
		},
		end: {
			x: 292,
			y: 128
		},
		thickness: .7,
		color: ink
	});
	page.drawText(brand.signatory, {
		x: 92,
		y: 108,
		size: 12,
		font: serif,
		color: ink
	});
	page.drawText(brand.role, {
		x: 92,
		y: 92,
		size: 9,
		font: sans,
		color: mute
	});
	page.drawCircle({
		x: 691.89,
		y: 118,
		size: 36,
		borderColor: accent,
		borderWidth: 1.2
	});
	page.drawCircle({
		x: 691.89,
		y: 118,
		size: 30,
		borderColor: accent,
		borderWidth: .5
	});
	const sealLabel = "ISSUED";
	const sW = sans.widthOfTextAtSize(sealLabel, 8);
	page.drawText(sealLabel, {
		x: 691.89 - sW / 2,
		y: 114,
		size: 8,
		font: sans,
		color: accent
	});
	centered(page, brand.line, 52, 8, sans, mute);
	return doc.save();
}
function fileNameFor(row) {
	return `${`${row.course}-${row.name}`.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60) || "certificate"}-${row.certId}.pdf`;
}
var FIELD_LABEL = {
	name: "Learner name",
	email: "Email",
	course: "Course / level",
	date: "Completion date",
	score: "Score (optional)"
};
var FIELDS = [
	"name",
	"email",
	"course",
	"date",
	"score"
];
var DEFAULT_BRAND = {
	org: "Northline Language",
	signatory: "M. Dlamini",
	role: "Programme lead",
	line: "Issued automatically. Each certificate has a unique ID.",
	layout: "classic",
	palette: "seal",
	logo: "",
	logoSide: "left"
};
var STEPS = [
	"List",
	"Map",
	"Preview",
	"Run"
];
function sleep(ms) {
	return new Promise((r) => setTimeout(r, ms));
}
function CertApp() {
	const fileRef = (0, import_react.useRef)(null);
	const [step, setStep] = (0, import_react.useState)(0);
	const [fileLabel, setFileLabel] = (0, import_react.useState)("Sample cohort · 12 learners");
	const [headers, setHeaders] = (0, import_react.useState)(SAMPLE_HEADERS);
	const [rows, setRows] = (0, import_react.useState)(SAMPLE_ROWS);
	const [mapping, setMapping] = (0, import_react.useState)(() => guessMapping(SAMPLE_HEADERS));
	const [brand, setBrand] = (0, import_react.useState)(DEFAULT_BRAND);
	const [fallbackCourse, setFallbackCourse] = (0, import_react.useState)("English Level 1");
	const [jobs, setJobs] = (0, import_react.useState)([]);
	const [previewIndex, setPreviewIndex] = (0, import_react.useState)(0);
	const [busy, setBusy] = (0, import_react.useState)("idle");
	const [log, setLog] = (0, import_react.useState)("Load a list, check the map, then run the batch.");
	const [pdfDone, setPdfDone] = (0, import_react.useState)(0);
	const planned = (0, import_react.useMemo)(() => buildJobs(rows, mapping, fallbackCourse), [
		rows,
		mapping,
		fallbackCourse
	]);
	const preview = planned[Math.min(previewIndex, Math.max(planned.length - 1, 0))];
	const active = jobs.length ? jobs : planned;
	const counts = count(active);
	async function onFile(file) {
		const parsed = await parseSheet(file);
		if (!parsed.headers.length || !parsed.rows.length) {
			setLog("That file has no header row or no learner rows.");
			return;
		}
		setHeaders(parsed.headers);
		setRows(parsed.rows);
		setMapping(guessMapping(parsed.headers));
		setFileLabel(`${file.name} · ${parsed.rows.length} rows`);
		setJobs([]);
		setPdfDone(0);
		setPreviewIndex(0);
		setLog(`Loaded ${parsed.rows.length} rows. Check the column map before you run.`);
		setStep(1);
	}
	function useSample() {
		setHeaders(SAMPLE_HEADERS);
		setRows(SAMPLE_ROWS);
		setMapping(guessMapping(SAMPLE_HEADERS));
		setFileLabel("Sample cohort · 12 learners");
		setJobs([]);
		setPdfDone(0);
		setLog("Sample list loaded. One bad email and one duplicate are included on purpose.");
		setStep(1);
	}
	async function makeZip() {
		const printable = (jobs.length ? jobs : planned).filter((j) => j.name && j.status !== "skipped");
		if (!printable.length) return;
		setBusy("pdf");
		setPdfDone(0);
		setLog("Rendering PDFs. Each certificate is its own file.");
		const zip = new import_lib.default();
		const folder = zip.folder("certificates");
		for (let i = 0; i < printable.length; i++) {
			const bytes = await certificatePdf(printable[i], brand);
			folder?.file(fileNameFor(printable[i]), bytes);
			setPdfDone(i + 1);
			if (i % 4 === 0) await sleep(0);
		}
		downloadBlob(await zip.generateAsync({ type: "blob" }), "certificates.zip");
		setBusy("idle");
		setLog(`ZIP ready: ${printable.length} PDFs.`);
	}
	async function runQueue(onlyOpen) {
		const queue = (jobs.length ? jobs : planned).map((j) => ({ ...j })).map((j) => {
			if (!onlyOpen) return j;
			if (j.note.startsWith("Invalid") || j.note === "Missing name" || j.status === "skipped" || j.status === "sent") return j;
			if (j.status === "failed") return {
				...j,
				status: "retry",
				note: "Queued again"
			};
			return j;
		});
		setJobs(queue);
		setBusy("mail");
		setStep(3);
		const work = queue.filter((j) => j.status === "pending" || j.status === "retry");
		setLog(onlyOpen ? `Resuming ${work.length} open rows. Already sent rows stay sent.` : `Dispatching ${work.length} emails. Invalid and duplicate rows are skipped before send.`);
		for (const row of work) {
			let attempt = row.attempts;
			let done = false;
			while (!done && attempt < 3) {
				attempt += 1;
				setJobs((cur) => cur.map((j) => j.certId === row.certId ? {
					...j,
					attempts: attempt,
					note: `Attempt ${attempt}`
				} : j));
				await sleep(90);
				if (shouldThrottle(row, attempt)) {
					setJobs((cur) => cur.map((j) => j.certId === row.certId ? {
						...j,
						status: "retry",
						attempts: attempt,
						note: "Rate limit — retrying this row only"
					} : j));
					await sleep(140);
					continue;
				}
				setJobs((cur) => cur.map((j) => j.certId === row.certId ? {
					...j,
					status: "sent",
					attempts: attempt,
					note: subjectFor(j, brand)
				} : j));
				done = true;
			}
		}
		setBusy("idle");
		setLog("Batch finished. Download the result sheet. Re-run only touches rows that did not send.");
	}
	function exportResults() {
		downloadBlob(rowsToWorkbook((jobs.length ? jobs : planned).map((j) => ({
			certificate_id: j.certId,
			name: j.name,
			email: j.email,
			course: j.course,
			date: j.date,
			score: j.score,
			status: j.status,
			attempts: String(j.attempts),
			note: j.note
		})), "results"), "certificate-results.xlsx");
	}
	function downloadSample() {
		downloadBlob(rowsToWorkbook(SAMPLE_ROWS, "learners"), "sample-learners.xlsx");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-surface text-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-line bg-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-4 px-5 py-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-[0.18em] text-primary uppercase",
						children: "Certflow"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl leading-tight sm:text-4xl",
						children: "One list. One run."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 max-w-xl text-sm text-muted",
						children: "Excel or CSV in. A PDF per learner. Failed rows retry on their own — the batch does not stop."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "flex flex-wrap gap-2",
					children: STEPS.map((label, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setStep(i),
						className: "min-h-11 rounded-full px-3 text-sm " + (step === i ? "bg-ink text-primary-fg" : "bg-surface text-muted"),
						children: [
							i + 1,
							" ",
							label
						]
					}) }, label))
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto grid min-w-0 max-w-6xl gap-6 px-5 py-6 lg:grid-cols-[minmax(0,1fr)_280px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "min-w-0 rounded-2xl border border-line bg-paper p-5",
				children: [
					step === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl",
								children: "Learner list"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: "One row per learner. Headers can be anything — you map them next. Nothing leaves this browser."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "min-h-11 rounded-full bg-primary px-5 text-sm font-medium text-primary-fg",
										onClick: () => fileRef.current?.click(),
										children: "Upload Excel or CSV"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "min-h-11 rounded-full border border-line px-5 text-sm",
										onClick: useSample,
										children: "Use sample cohort"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "min-h-11 px-3 text-sm text-muted underline",
										onClick: downloadSample,
										children: "Download sample file"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										ref: fileRef,
										type: "file",
										accept: ".xlsx,.xls,.csv",
										className: "hidden",
										onChange: (e) => {
											const file = e.target.files?.[0];
											if (file) onFile(file);
											e.target.value = "";
										}
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm",
								children: fileLabel
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
								headers,
								rows: rows.slice(0, 6)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted",
								children: [
									"Showing ",
									Math.min(6, rows.length),
									" of ",
									rows.length,
									"."
								]
							})
						]
					}),
					step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl",
								children: "Column map"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [FIELDS.map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted",
										children: FIELD_LABEL[key]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										className: "mt-1 min-h-11 w-full rounded-lg border border-line bg-surface px-3",
										value: mapping[key],
										onChange: (e) => setMapping({
											...mapping,
											[key]: e.target.value
										}),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "— not in this file —"
										}), headers.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: h,
											children: h
										}, h))]
									})]
								}, key)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted",
										children: "Course if the column is empty"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "mt-1 min-h-11 w-full rounded-lg border border-line bg-surface px-3",
										value: fallbackCourse,
										onChange: (e) => setFallbackCourse(e.target.value)
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "min-h-11 rounded-full bg-ink px-5 text-sm text-primary-fg",
								onClick: () => setStep(2),
								children: "Preview certificate"
							})
						]
					}),
					step === 2 && preview && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-2xl",
									children: "Preview"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-sm text-muted",
									children: [
										"Row",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
											className: "min-h-11 rounded-lg border border-line bg-surface px-2",
											value: previewIndex,
											onChange: (e) => setPreviewIndex(Number(e.target.value)),
											children: planned.map((j, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
												value: i,
												children: [
													i + 1,
													". ",
													j.name || "(no name)"
												]
											}, j.certId))
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: "This is the real certificate. Logo, colours, and layout update here before you run."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PdfPreview, {
								row: preview,
								brand
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyleDesigner, {
								brand,
								onChange: setBrand
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "min-h-11 rounded-full bg-primary px-5 text-sm font-medium text-primary-fg",
								onClick: () => {
									setJobs([]);
									setStep(3);
								},
								children: "Continue to run"
							})
						]
					}),
					step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl",
								children: "Run"
							}),
							preview && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PdfPreview, {
								row: preview,
								brand
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										label: "Rows",
										value: active.length
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										label: "Ready",
										value: counts.pending + counts.retry
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										label: "Sent",
										value: counts.sent
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										label: "Failed",
										value: counts.failed
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										label: "Skipped",
										value: counts.skipped
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										disabled: busy !== "idle",
										className: "inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-fg disabled:opacity-50",
										onClick: () => void runQueue(jobs.some((j) => j.status === "sent")),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" }), jobs.some((j) => j.status === "sent") ? "Retry open rows" : "Run batch"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										disabled: busy !== "idle",
										className: "inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-5 text-sm disabled:opacity-50",
										onClick: () => void makeZip(),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), busy === "pdf" ? `PDFs ${pdfDone}` : "Download ZIP"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										className: "inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-5 text-sm",
										onClick: exportResults,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileSpreadsheet, { className: "size-4" }), "Result sheet"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										className: "inline-flex min-h-11 items-center gap-2 px-3 text-sm text-muted",
										onClick: () => {
											setJobs([]);
											setLog("Queue cleared. Run again from the current list.");
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), "Reset queue"]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "max-h-[420px] divide-y divide-line overflow-auto rounded-xl border border-line",
								children: active.map((j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start justify-between gap-3 px-3 py-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "truncate font-medium",
												children: j.name || "—"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "truncate text-muted",
												children: [
													j.email || "no email",
													" · ",
													j.certId
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-muted",
												children: j.note
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, { status: j.status })]
								}, j.certId))
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-line bg-paper p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-2 flex items-center gap-2 text-sm font-medium",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 text-primary" }), "Why this does not die at row 200"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-2 text-sm text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0" }), " One row is one unit of work."]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0" }), " Bad emails fail before send."]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0" }), " Duplicates are skipped."]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0" }), " A throttle retries that row only."]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-2xl border border-line bg-paper p-4 text-sm text-muted",
						children: log
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: "Mail here is a dry-run queue so you can prove the batch. Plug Resend or SES in when you deploy for a client — the row statuses stay the same."
					})
				]
			})]
		})]
	});
}
function count(rows) {
	return rows.reduce((acc, row) => {
		acc[row.status] += 1;
		return acc;
	}, {
		pending: 0,
		retry: 0,
		sent: 0,
		failed: 0,
		skipped: 0
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-16 rounded-xl bg-surface px-3 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-xl leading-none",
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted",
			children: label
		})]
	});
}
function StatusPill({ status }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "shrink-0 rounded-full border border-line px-2 py-1 text-xs uppercase tracking-wide",
		children: status === "pending" ? "ready" : status
	});
}
function StyleDesigner({ brand, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "inline-flex min-h-11 cursor-pointer items-center rounded-full border border-line px-4 text-sm",
						children: [brand.logo ? "Replace logo" : "Add logo", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "file",
							accept: "image/png,image/jpeg",
							className: "hidden",
							onChange: (e) => {
								const file = e.target.files?.[0];
								e.target.value = "";
								if (!file) return;
								if (file.size > 7e5) return;
								const reader = new FileReader();
								reader.onload = () => onChange({
									...brand,
									logo: String(reader.result || "")
								});
								reader.readAsDataURL(file);
							}
						})]
					}),
					brand.logo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 text-sm text-muted underline",
						onClick: () => onChange({
							...brand,
							logo: ""
						}),
						children: "Remove logo"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-muted",
						children: "PNG or JPG, under 700 KB. Sits top left or top right."
					}),
					brand.logo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2",
						children: ["left", "right"].map((side) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => onChange({
								...brand,
								logoSide: side
							}),
							className: "min-h-11 rounded-full px-4 text-sm capitalize " + (brand.logoSide === side ? "bg-ink text-primary-fg" : "border border-line"),
							children: side
						}, side))
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: LAYOUTS.map((layout) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onChange({
						...brand,
						layout: layout.id
					}),
					className: "min-h-11 rounded-full px-4 text-sm " + (brand.layout === layout.id ? "bg-ink text-primary-fg" : "border border-line"),
					children: layout.label
				}, layout.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: PALETTES.map((palette) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onChange({
						...brand,
						palette: palette.id
					}),
					className: "min-h-11 rounded-full border px-4 text-sm " + (brand.palette === palette.id ? "border-ink" : "border-line"),
					children: palette.label
				}, palette.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [
					["org", "Organisation"],
					["signatory", "Signatory"],
					["role", "Role"],
					["line", "Footer line"]
				].map(([key, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "mt-1 min-h-11 w-full rounded-lg border border-line bg-surface px-3",
						value: brand[key],
						onChange: (e) => onChange({
							...brand,
							[key]: e.target.value
						})
					})]
				}, key))
			})
		]
	});
}
function Table({ headers, rows }) {
	if (!headers.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-x-auto rounded-xl border border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full min-w-[520px] text-left text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
				className: "bg-surface text-muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: headers.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-3 py-2 font-medium",
					children: h
				}, h)) })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
				className: "border-t border-line",
				children: headers.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-3 py-2",
					children: row[h]
				}, h))
			}, i)) })]
		})
	});
}
function PdfPreview({ row, brand }) {
	const [url, setUrl] = (0, import_react.useState)("");
	const brandKey = `${brand.org}|${brand.signatory}|${brand.role}|${brand.line}|${brand.layout}|${brand.palette}|${brand.logoSide}|${brand.logo}`;
	const rowKey = `${row.certId}|${row.name}|${row.course}|${row.date}|${row.score}`;
	(0, import_react.useEffect)(() => {
		let current = "";
		let cancelled = false;
		certificatePdf(row, brand).then((bytes) => {
			if (cancelled) return;
			const copy = new Uint8Array(bytes.byteLength);
			copy.set(bytes);
			current = URL.createObjectURL(new Blob([copy.buffer], { type: "application/pdf" }));
			setUrl(current);
		});
		return () => {
			cancelled = true;
			if (current) URL.revokeObjectURL(current);
		};
	}, [
		brand,
		brandKey,
		row,
		rowKey
	]);
	if (!url) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: "Drawing certificate…"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
		title: "Certificate preview",
		src: url,
		className: "aspect-[1.414/1] w-full rounded-sm border border-line bg-paper"
	});
}
function CertflowPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CertApp, {});
}
//#endregion
export { CertflowPage as component };
