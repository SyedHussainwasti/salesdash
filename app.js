// salesdash — all page data and logic lives here. Every line below has a plain-English note above it.
// The full dataset for this page, written one row per line so it is easy to read.
// "months": the 12 months of 2024. "products": the 5 products sold, with their prices in rupees.
// "regions": North, South and West. "sales": 180 rows — one per product, per region, per month.
// Each sales row has the month, product name, region, units sold and revenue in rupees.
// "inventory": 18 items in the warehouse — each row has a sku code, product name, category,
// stock on hand, the stock level that triggers a reorder, unit price, supplier,
// last restock date and status (OK, Low, Critical or Out of stock).
const PORTFOLIO_DATA = {
  "months": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  "products": [
    {"name": "Nova Laptop X1", "price": 54999},
    {"name": "Pulse Headphones Pro", "price": 4999},
    {"name": "Orbit Smartwatch S2", "price": 8999},
    {"name": "Volt Power Bank 20K", "price": 1999},
    {"name": "Aero Bluetooth Speaker", "price": 3499}
  ],
  "regions": ["North", "South", "West"],
  "sales": [
    {"month": "Jan", "product": "Nova Laptop X1", "region": "North", "units": 10, "revenue": 549990},
    {"month": "Jan", "product": "Nova Laptop X1", "region": "South", "units": 10, "revenue": 549990},
    {"month": "Jan", "product": "Nova Laptop X1", "region": "West", "units": 7, "revenue": 384993},
    {"month": "Jan", "product": "Pulse Headphones Pro", "region": "North", "units": 60, "revenue": 299940},
    {"month": "Jan", "product": "Pulse Headphones Pro", "region": "South", "units": 52, "revenue": 259948},
    {"month": "Jan", "product": "Pulse Headphones Pro", "region": "West", "units": 40, "revenue": 199960},
    {"month": "Jan", "product": "Orbit Smartwatch S2", "region": "North", "units": 32, "revenue": 287968},
    {"month": "Jan", "product": "Orbit Smartwatch S2", "region": "South", "units": 33, "revenue": 296967},
    {"month": "Jan", "product": "Orbit Smartwatch S2", "region": "West", "units": 20, "revenue": 179980},
    {"month": "Jan", "product": "Volt Power Bank 20K", "region": "North", "units": 82, "revenue": 163918},
    {"month": "Jan", "product": "Volt Power Bank 20K", "region": "South", "units": 81, "revenue": 161919},
    {"month": "Jan", "product": "Volt Power Bank 20K", "region": "West", "units": 47, "revenue": 93953},
    {"month": "Jan", "product": "Aero Bluetooth Speaker", "region": "North", "units": 38, "revenue": 132962},
    {"month": "Jan", "product": "Aero Bluetooth Speaker", "region": "South", "units": 40, "revenue": 139960},
    {"month": "Jan", "product": "Aero Bluetooth Speaker", "region": "West", "units": 28, "revenue": 97972},
    {"month": "Feb", "product": "Nova Laptop X1", "region": "North", "units": 12, "revenue": 659988},
    {"month": "Feb", "product": "Nova Laptop X1", "region": "South", "units": 11, "revenue": 604989},
    {"month": "Feb", "product": "Nova Laptop X1", "region": "West", "units": 5, "revenue": 274995},
    {"month": "Feb", "product": "Pulse Headphones Pro", "region": "North", "units": 56, "revenue": 279944},
    {"month": "Feb", "product": "Pulse Headphones Pro", "region": "South", "units": 47, "revenue": 234953},
    {"month": "Feb", "product": "Pulse Headphones Pro", "region": "West", "units": 29, "revenue": 144971},
    {"month": "Feb", "product": "Orbit Smartwatch S2", "region": "North", "units": 30, "revenue": 269970},
    {"month": "Feb", "product": "Orbit Smartwatch S2", "region": "South", "units": 37, "revenue": 332963},
    {"month": "Feb", "product": "Orbit Smartwatch S2", "region": "West", "units": 20, "revenue": 179980},
    {"month": "Feb", "product": "Volt Power Bank 20K", "region": "North", "units": 70, "revenue": 139930},
    {"month": "Feb", "product": "Volt Power Bank 20K", "region": "South", "units": 61, "revenue": 121939},
    {"month": "Feb", "product": "Volt Power Bank 20K", "region": "West", "units": 60, "revenue": 119940},
    {"month": "Feb", "product": "Aero Bluetooth Speaker", "region": "North", "units": 41, "revenue": 143459},
    {"month": "Feb", "product": "Aero Bluetooth Speaker", "region": "South", "units": 39, "revenue": 136461},
    {"month": "Feb", "product": "Aero Bluetooth Speaker", "region": "West", "units": 27, "revenue": 94473},
    {"month": "Mar", "product": "Nova Laptop X1", "region": "North", "units": 15, "revenue": 824985},
    {"month": "Mar", "product": "Nova Laptop X1", "region": "South", "units": 10, "revenue": 549990},
    {"month": "Mar", "product": "Nova Laptop X1", "region": "West", "units": 8, "revenue": 439992},
    {"month": "Mar", "product": "Pulse Headphones Pro", "region": "North", "units": 61, "revenue": 304939},
    {"month": "Mar", "product": "Pulse Headphones Pro", "region": "South", "units": 49, "revenue": 244951},
    {"month": "Mar", "product": "Pulse Headphones Pro", "region": "West", "units": 38, "revenue": 189962},
    {"month": "Mar", "product": "Orbit Smartwatch S2", "region": "North", "units": 39, "revenue": 350961},
    {"month": "Mar", "product": "Orbit Smartwatch S2", "region": "South", "units": 36, "revenue": 323964},
    {"month": "Mar", "product": "Orbit Smartwatch S2", "region": "West", "units": 19, "revenue": 170981},
    {"month": "Mar", "product": "Volt Power Bank 20K", "region": "North", "units": 80, "revenue": 159920},
    {"month": "Mar", "product": "Volt Power Bank 20K", "region": "South", "units": 72, "revenue": 143928},
    {"month": "Mar", "product": "Volt Power Bank 20K", "region": "West", "units": 47, "revenue": 93953},
    {"month": "Mar", "product": "Aero Bluetooth Speaker", "region": "North", "units": 38, "revenue": 132962},
    {"month": "Mar", "product": "Aero Bluetooth Speaker", "region": "South", "units": 31, "revenue": 108469},
    {"month": "Mar", "product": "Aero Bluetooth Speaker", "region": "West", "units": 24, "revenue": 83976},
    {"month": "Apr", "product": "Nova Laptop X1", "region": "North", "units": 12, "revenue": 659988},
    {"month": "Apr", "product": "Nova Laptop X1", "region": "South", "units": 10, "revenue": 549990},
    {"month": "Apr", "product": "Nova Laptop X1", "region": "West", "units": 7, "revenue": 384993},
    {"month": "Apr", "product": "Pulse Headphones Pro", "region": "North", "units": 50, "revenue": 249950},
    {"month": "Apr", "product": "Pulse Headphones Pro", "region": "South", "units": 57, "revenue": 284943},
    {"month": "Apr", "product": "Pulse Headphones Pro", "region": "West", "units": 36, "revenue": 179964},
    {"month": "Apr", "product": "Orbit Smartwatch S2", "region": "North", "units": 41, "revenue": 368959},
    {"month": "Apr", "product": "Orbit Smartwatch S2", "region": "South", "units": 29, "revenue": 260971},
    {"month": "Apr", "product": "Orbit Smartwatch S2", "region": "West", "units": 26, "revenue": 233974},
    {"month": "Apr", "product": "Volt Power Bank 20K", "region": "North", "units": 80, "revenue": 159920},
    {"month": "Apr", "product": "Volt Power Bank 20K", "region": "South", "units": 77, "revenue": 153923},
    {"month": "Apr", "product": "Volt Power Bank 20K", "region": "West", "units": 69, "revenue": 137931},
    {"month": "Apr", "product": "Aero Bluetooth Speaker", "region": "North", "units": 46, "revenue": 160954},
    {"month": "Apr", "product": "Aero Bluetooth Speaker", "region": "South", "units": 39, "revenue": 136461},
    {"month": "Apr", "product": "Aero Bluetooth Speaker", "region": "West", "units": 29, "revenue": 101471},
    {"month": "May", "product": "Nova Laptop X1", "region": "North", "units": 15, "revenue": 824985},
    {"month": "May", "product": "Nova Laptop X1", "region": "South", "units": 10, "revenue": 549990},
    {"month": "May", "product": "Nova Laptop X1", "region": "West", "units": 6, "revenue": 329994},
    {"month": "May", "product": "Pulse Headphones Pro", "region": "North", "units": 53, "revenue": 264947},
    {"month": "May", "product": "Pulse Headphones Pro", "region": "South", "units": 46, "revenue": 229954},
    {"month": "May", "product": "Pulse Headphones Pro", "region": "West", "units": 32, "revenue": 159968},
    {"month": "May", "product": "Orbit Smartwatch S2", "region": "North", "units": 48, "revenue": 431952},
    {"month": "May", "product": "Orbit Smartwatch S2", "region": "South", "units": 41, "revenue": 368959},
    {"month": "May", "product": "Orbit Smartwatch S2", "region": "West", "units": 23, "revenue": 206977},
    {"month": "May", "product": "Volt Power Bank 20K", "region": "North", "units": 102, "revenue": 203898},
    {"month": "May", "product": "Volt Power Bank 20K", "region": "South", "units": 81, "revenue": 161919},
    {"month": "May", "product": "Volt Power Bank 20K", "region": "West", "units": 70, "revenue": 139930},
    {"month": "May", "product": "Aero Bluetooth Speaker", "region": "North", "units": 45, "revenue": 157455},
    {"month": "May", "product": "Aero Bluetooth Speaker", "region": "South", "units": 36, "revenue": 125964},
    {"month": "May", "product": "Aero Bluetooth Speaker", "region": "West", "units": 25, "revenue": 87475},
    {"month": "Jun", "product": "Nova Laptop X1", "region": "North", "units": 11, "revenue": 604989},
    {"month": "Jun", "product": "Nova Laptop X1", "region": "South", "units": 11, "revenue": 604989},
    {"month": "Jun", "product": "Nova Laptop X1", "region": "West", "units": 9, "revenue": 494991},
    {"month": "Jun", "product": "Pulse Headphones Pro", "region": "North", "units": 52, "revenue": 259948},
    {"month": "Jun", "product": "Pulse Headphones Pro", "region": "South", "units": 42, "revenue": 209958},
    {"month": "Jun", "product": "Pulse Headphones Pro", "region": "West", "units": 41, "revenue": 204959},
    {"month": "Jun", "product": "Orbit Smartwatch S2", "region": "North", "units": 38, "revenue": 341962},
    {"month": "Jun", "product": "Orbit Smartwatch S2", "region": "South", "units": 28, "revenue": 251972},
    {"month": "Jun", "product": "Orbit Smartwatch S2", "region": "West", "units": 19, "revenue": 170981},
    {"month": "Jun", "product": "Volt Power Bank 20K", "region": "North", "units": 76, "revenue": 151924},
    {"month": "Jun", "product": "Volt Power Bank 20K", "region": "South", "units": 83, "revenue": 165917},
    {"month": "Jun", "product": "Volt Power Bank 20K", "region": "West", "units": 63, "revenue": 125937},
    {"month": "Jun", "product": "Aero Bluetooth Speaker", "region": "North", "units": 41, "revenue": 143459},
    {"month": "Jun", "product": "Aero Bluetooth Speaker", "region": "South", "units": 31, "revenue": 108469},
    {"month": "Jun", "product": "Aero Bluetooth Speaker", "region": "West", "units": 25, "revenue": 87475},
    {"month": "Jul", "product": "Nova Laptop X1", "region": "North", "units": 14, "revenue": 769986},
    {"month": "Jul", "product": "Nova Laptop X1", "region": "South", "units": 14, "revenue": 769986},
    {"month": "Jul", "product": "Nova Laptop X1", "region": "West", "units": 10, "revenue": 549990},
    {"month": "Jul", "product": "Pulse Headphones Pro", "region": "North", "units": 48, "revenue": 239952},
    {"month": "Jul", "product": "Pulse Headphones Pro", "region": "South", "units": 57, "revenue": 284943},
    {"month": "Jul", "product": "Pulse Headphones Pro", "region": "West", "units": 40, "revenue": 199960},
    {"month": "Jul", "product": "Orbit Smartwatch S2", "region": "North", "units": 43, "revenue": 386957},
    {"month": "Jul", "product": "Orbit Smartwatch S2", "region": "South", "units": 33, "revenue": 296967},
    {"month": "Jul", "product": "Orbit Smartwatch S2", "region": "West", "units": 28, "revenue": 251972},
    {"month": "Jul", "product": "Volt Power Bank 20K", "region": "North", "units": 84, "revenue": 167916},
    {"month": "Jul", "product": "Volt Power Bank 20K", "region": "South", "units": 85, "revenue": 169915},
    {"month": "Jul", "product": "Volt Power Bank 20K", "region": "West", "units": 61, "revenue": 121939},
    {"month": "Jul", "product": "Aero Bluetooth Speaker", "region": "North", "units": 56, "revenue": 195944},
    {"month": "Jul", "product": "Aero Bluetooth Speaker", "region": "South", "units": 47, "revenue": 164453},
    {"month": "Jul", "product": "Aero Bluetooth Speaker", "region": "West", "units": 26, "revenue": 90974},
    {"month": "Aug", "product": "Nova Laptop X1", "region": "North", "units": 10, "revenue": 549990},
    {"month": "Aug", "product": "Nova Laptop X1", "region": "South", "units": 12, "revenue": 659988},
    {"month": "Aug", "product": "Nova Laptop X1", "region": "West", "units": 9, "revenue": 494991},
    {"month": "Aug", "product": "Pulse Headphones Pro", "region": "North", "units": 49, "revenue": 244951},
    {"month": "Aug", "product": "Pulse Headphones Pro", "region": "South", "units": 49, "revenue": 244951},
    {"month": "Aug", "product": "Pulse Headphones Pro", "region": "West", "units": 35, "revenue": 174965},
    {"month": "Aug", "product": "Orbit Smartwatch S2", "region": "North", "units": 32, "revenue": 287968},
    {"month": "Aug", "product": "Orbit Smartwatch S2", "region": "South", "units": 36, "revenue": 323964},
    {"month": "Aug", "product": "Orbit Smartwatch S2", "region": "West", "units": 24, "revenue": 215976},
    {"month": "Aug", "product": "Volt Power Bank 20K", "region": "North", "units": 100, "revenue": 199900},
    {"month": "Aug", "product": "Volt Power Bank 20K", "region": "South", "units": 79, "revenue": 157921},
    {"month": "Aug", "product": "Volt Power Bank 20K", "region": "West", "units": 45, "revenue": 89955},
    {"month": "Aug", "product": "Aero Bluetooth Speaker", "region": "North", "units": 39, "revenue": 136461},
    {"month": "Aug", "product": "Aero Bluetooth Speaker", "region": "South", "units": 30, "revenue": 104970},
    {"month": "Aug", "product": "Aero Bluetooth Speaker", "region": "West", "units": 31, "revenue": 108469},
    {"month": "Sep", "product": "Nova Laptop X1", "region": "North", "units": 15, "revenue": 824985},
    {"month": "Sep", "product": "Nova Laptop X1", "region": "South", "units": 11, "revenue": 604989},
    {"month": "Sep", "product": "Nova Laptop X1", "region": "West", "units": 7, "revenue": 384993},
    {"month": "Sep", "product": "Pulse Headphones Pro", "region": "North", "units": 67, "revenue": 334933},
    {"month": "Sep", "product": "Pulse Headphones Pro", "region": "South", "units": 60, "revenue": 299940},
    {"month": "Sep", "product": "Pulse Headphones Pro", "region": "West", "units": 30, "revenue": 149970},
    {"month": "Sep", "product": "Orbit Smartwatch S2", "region": "North", "units": 41, "revenue": 368959},
    {"month": "Sep", "product": "Orbit Smartwatch S2", "region": "South", "units": 30, "revenue": 269970},
    {"month": "Sep", "product": "Orbit Smartwatch S2", "region": "West", "units": 28, "revenue": 251972},
    {"month": "Sep", "product": "Volt Power Bank 20K", "region": "North", "units": 107, "revenue": 213893},
    {"month": "Sep", "product": "Volt Power Bank 20K", "region": "South", "units": 72, "revenue": 143928},
    {"month": "Sep", "product": "Volt Power Bank 20K", "region": "West", "units": 60, "revenue": 119940},
    {"month": "Sep", "product": "Aero Bluetooth Speaker", "region": "North", "units": 47, "revenue": 164453},
    {"month": "Sep", "product": "Aero Bluetooth Speaker", "region": "South", "units": 36, "revenue": 125964},
    {"month": "Sep", "product": "Aero Bluetooth Speaker", "region": "West", "units": 33, "revenue": 115467},
    {"month": "Oct", "product": "Nova Laptop X1", "region": "North", "units": 14, "revenue": 769986},
    {"month": "Oct", "product": "Nova Laptop X1", "region": "South", "units": 14, "revenue": 769986},
    {"month": "Oct", "product": "Nova Laptop X1", "region": "West", "units": 11, "revenue": 604989},
    {"month": "Oct", "product": "Pulse Headphones Pro", "region": "North", "units": 61, "revenue": 304939},
    {"month": "Oct", "product": "Pulse Headphones Pro", "region": "South", "units": 56, "revenue": 279944},
    {"month": "Oct", "product": "Pulse Headphones Pro", "region": "West", "units": 52, "revenue": 259948},
    {"month": "Oct", "product": "Orbit Smartwatch S2", "region": "North", "units": 52, "revenue": 467948},
    {"month": "Oct", "product": "Orbit Smartwatch S2", "region": "South", "units": 42, "revenue": 377958},
    {"month": "Oct", "product": "Orbit Smartwatch S2", "region": "West", "units": 31, "revenue": 278969},
    {"month": "Oct", "product": "Volt Power Bank 20K", "region": "North", "units": 98, "revenue": 195902},
    {"month": "Oct", "product": "Volt Power Bank 20K", "region": "South", "units": 90, "revenue": 179910},
    {"month": "Oct", "product": "Volt Power Bank 20K", "region": "West", "units": 68, "revenue": 135932},
    {"month": "Oct", "product": "Aero Bluetooth Speaker", "region": "North", "units": 57, "revenue": 199443},
    {"month": "Oct", "product": "Aero Bluetooth Speaker", "region": "South", "units": 43, "revenue": 150457},
    {"month": "Oct", "product": "Aero Bluetooth Speaker", "region": "West", "units": 30, "revenue": 104970},
    {"month": "Nov", "product": "Nova Laptop X1", "region": "North", "units": 16, "revenue": 879984},
    {"month": "Nov", "product": "Nova Laptop X1", "region": "South", "units": 11, "revenue": 604989},
    {"month": "Nov", "product": "Nova Laptop X1", "region": "West", "units": 11, "revenue": 604989},
    {"month": "Nov", "product": "Pulse Headphones Pro", "region": "North", "units": 75, "revenue": 374925},
    {"month": "Nov", "product": "Pulse Headphones Pro", "region": "South", "units": 47, "revenue": 234953},
    {"month": "Nov", "product": "Pulse Headphones Pro", "region": "West", "units": 36, "revenue": 179964},
    {"month": "Nov", "product": "Orbit Smartwatch S2", "region": "North", "units": 49, "revenue": 440951},
    {"month": "Nov", "product": "Orbit Smartwatch S2", "region": "South", "units": 36, "revenue": 323964},
    {"month": "Nov", "product": "Orbit Smartwatch S2", "region": "West", "units": 24, "revenue": 215976},
    {"month": "Nov", "product": "Volt Power Bank 20K", "region": "North", "units": 128, "revenue": 255872},
    {"month": "Nov", "product": "Volt Power Bank 20K", "region": "South", "units": 98, "revenue": 195902},
    {"month": "Nov", "product": "Volt Power Bank 20K", "region": "West", "units": 67, "revenue": 133933},
    {"month": "Nov", "product": "Aero Bluetooth Speaker", "region": "North", "units": 57, "revenue": 199443},
    {"month": "Nov", "product": "Aero Bluetooth Speaker", "region": "South", "units": 51, "revenue": 178449},
    {"month": "Nov", "product": "Aero Bluetooth Speaker", "region": "West", "units": 28, "revenue": 97972},
    {"month": "Dec", "product": "Nova Laptop X1", "region": "North", "units": 14, "revenue": 769986},
    {"month": "Dec", "product": "Nova Laptop X1", "region": "South", "units": 13, "revenue": 714987},
    {"month": "Dec", "product": "Nova Laptop X1", "region": "West", "units": 9, "revenue": 494991},
    {"month": "Dec", "product": "Pulse Headphones Pro", "region": "North", "units": 72, "revenue": 359928},
    {"month": "Dec", "product": "Pulse Headphones Pro", "region": "South", "units": 61, "revenue": 304939},
    {"month": "Dec", "product": "Pulse Headphones Pro", "region": "West", "units": 49, "revenue": 244951},
    {"month": "Dec", "product": "Orbit Smartwatch S2", "region": "North", "units": 39, "revenue": 350961},
    {"month": "Dec", "product": "Orbit Smartwatch S2", "region": "South", "units": 39, "revenue": 350961},
    {"month": "Dec", "product": "Orbit Smartwatch S2", "region": "West", "units": 27, "revenue": 242973},
    {"month": "Dec", "product": "Volt Power Bank 20K", "region": "North", "units": 125, "revenue": 249875},
    {"month": "Dec", "product": "Volt Power Bank 20K", "region": "South", "units": 86, "revenue": 171914},
    {"month": "Dec", "product": "Volt Power Bank 20K", "region": "West", "units": 60, "revenue": 119940},
    {"month": "Dec", "product": "Aero Bluetooth Speaker", "region": "North", "units": 51, "revenue": 178449},
    {"month": "Dec", "product": "Aero Bluetooth Speaker", "region": "South", "units": 44, "revenue": 153956},
    {"month": "Dec", "product": "Aero Bluetooth Speaker", "region": "West", "units": 29, "revenue": 101471}
  ],
  "inventory": [
    {"sku": "EL-1001", "product": "Nova Laptop X1", "category": "Electronics", "stock": 42, "reorder": 20, "price": 54999, "supplier": "TechSource Distributors", "restocked": "2024-11-02", "status": "OK"},
    {"sku": "EL-1002", "product": "Pulse Headphones Pro", "category": "Electronics", "stock": 15, "reorder": 30, "price": 4999, "supplier": "TechSource Distributors", "restocked": "2024-10-18", "status": "Low"},
    {"sku": "EL-1003", "product": "Orbit Smartwatch S2", "category": "Electronics", "stock": 8, "reorder": 25, "price": 8999, "supplier": "GadgetHub Pvt Ltd", "restocked": "2024-09-30", "status": "Critical"},
    {"sku": "EL-1004", "product": "Volt Power Bank 20K", "category": "Electronics", "stock": 120, "reorder": 50, "price": 1999, "supplier": "GadgetHub Pvt Ltd", "restocked": "2024-11-10", "status": "OK"},
    {"sku": "EL-1005", "product": "Aero Bluetooth Speaker", "category": "Electronics", "stock": 55, "reorder": 30, "price": 3499, "supplier": "SoundWave Traders", "restocked": "2024-11-05", "status": "OK"},
    {"sku": "EL-1006", "product": "USB-C Fast Charger 65W", "category": "Electronics", "stock": 0, "reorder": 40, "price": 1499, "supplier": "GadgetHub Pvt Ltd", "restocked": "2024-08-22", "status": "Out of stock"},
    {"sku": "AC-2001", "product": "Ergo Wireless Mouse", "category": "Accessories", "stock": 200, "reorder": 60, "price": 1299, "supplier": "PeriPlus Supplies", "restocked": "2024-11-12", "status": "OK"},
    {"sku": "AC-2002", "product": "Mech Keyboard K87", "category": "Accessories", "stock": 34, "reorder": 25, "price": 5999, "supplier": "PeriPlus Supplies", "restocked": "2024-10-25", "status": "OK"},
    {"sku": "AC-2003", "product": "Laptop Stand Aluminium", "category": "Accessories", "stock": 12, "reorder": 20, "price": 2499, "supplier": "DeskWell Co", "restocked": "2024-09-15", "status": "Low"},
    {"sku": "AC-2004", "product": "HDMI Cable 2m", "category": "Accessories", "stock": 300, "reorder": 100, "price": 499, "supplier": "CableKart", "restocked": "2024-11-01", "status": "OK"},
    {"sku": "AC-2005", "product": "Webcam 1080p", "category": "Accessories", "stock": 22, "reorder": 15, "price": 3999, "supplier": "PeriPlus Supplies", "restocked": "2024-10-30", "status": "OK"},
    {"sku": "OF-3001", "product": "A4 Notebook Pack (5)", "category": "Office", "stock": 150, "reorder": 80, "price": 349, "supplier": "PaperLine", "restocked": "2024-11-08", "status": "OK"},
    {"sku": "OF-3002", "product": "Gel Pen Box (20)", "category": "Office", "stock": 45, "reorder": 60, "price": 299, "supplier": "PaperLine", "restocked": "2024-10-12", "status": "Low"},
    {"sku": "OF-3003", "product": "Desk Organizer", "category": "Office", "stock": 5, "reorder": 15, "price": 899, "supplier": "DeskWell Co", "restocked": "2024-09-05", "status": "Critical"},
    {"sku": "OF-3004", "product": "Sticky Notes Cube", "category": "Office", "stock": 90, "reorder": 40, "price": 199, "supplier": "PaperLine", "restocked": "2024-11-11", "status": "OK"},
    {"sku": "NT-4001", "product": "Cat6 Cable 305m", "category": "Networking", "stock": 18, "reorder": 10, "price": 6999, "supplier": "NetGear Distributors", "restocked": "2024-10-20", "status": "OK"},
    {"sku": "NT-4002", "product": "8-Port Gigabit Switch", "category": "Networking", "stock": 3, "reorder": 8, "price": 3299, "supplier": "NetGear Distributors", "restocked": "2024-09-28", "status": "Critical"},
    {"sku": "NT-4003", "product": "Wi-Fi Router AX1800", "category": "Networking", "stock": 27, "reorder": 12, "price": 5499, "supplier": "NetGear Distributors", "restocked": "2024-11-03", "status": "OK"}
  ]
};

// Short name for the dataset above, so the lines below stay short.
const D = PORTFOLIO_DATA;
// Helper: turn a plain number into Indian rupees, like 12,34,567 with a rupee sign.
const inr = n => "₹" + n.toLocaleString("en-IN");
// Helper: add up all the numbers in a list.
const sum = a => a.reduce((x,y)=>x+y,0);

// For each month, add up the revenue of every sales row of that month.
const monthlyRev = D.months.map(m => sum(D.sales.filter(s=>s.month===m).map(s=>s.revenue)));
// For each month, add up the units sold in every sales row of that month.
const monthlyUnits = D.months.map(m => sum(D.sales.filter(s=>s.month===m).map(s=>s.units)));
// Year totals: add up the 12 monthly revenues and the 12 monthly unit counts.
const totalRev = sum(monthlyRev), totalUnits = sum(monthlyUnits);
// Find which month (0 means Jan) had the highest revenue.
const bestI = monthlyRev.indexOf(Math.max(...monthlyRev));
// For each product, add up its revenue across all months and regions.
const prodRev = D.products.map(p => ({name:p.name, rev: sum(D.sales.filter(s=>s.product===p.name).map(s=>s.revenue))}));
// Pick the product with the highest total revenue.
const topProd = prodRev.reduce((a,b)=>a.rev>b.rev?a:b);
// For each region (North, South, West), add up its total revenue.
const regRev = D.regions.map(r => sum(D.sales.filter(s=>s.region===r).map(s=>s.revenue)));

// Fill the four KPI cards at the top of the page.
document.getElementById("kpis").innerHTML = [
  // Card 1: total revenue for the year, shown in rupees.
  ["Total revenue", inr(totalRev)],
  // Card 2: total units sold, with Indian-style commas.
  ["Units sold", totalUnits.toLocaleString("en-IN")],
  // Card 3: the best month's name and its revenue.
  ["Best month", D.months[bestI] + " · " + inr(monthlyRev[bestI])],
  // Card 4: the name of the highest-earning product.
  ["Top product", topProd.name]
// Turn each [label, value] pair into one card's HTML, then join them into a single string.
].map(([l,v])=>`<div class="kpi"><div class="l">${l}</div><div class="v">${v}</div></div>`).join("");

// Five shades of blue used for the product chart bars.
const blue = ["#1F4E79","#2E75B6","#5B9BD5","#9DC3E6","#BDD7EE"];
// Draw the monthly revenue trend as a smooth line chart.
new Chart(cMonthly,{type:"line",data:{labels:D.months,datasets:[{label:"Revenue (₹)",data:monthlyRev,borderColor:"#1F4E79",backgroundColor:"rgba(31,78,121,.12)",fill:true,tension:.3,pointRadius:3}]},options:{plugins:{legend:{display:false}},scales:{y:{ticks:{callback:v=>"₹"+(v/100000).toFixed(1)+"L"}}}}});
// Draw revenue by product as a bar chart.
new Chart(cProduct,{type:"bar",data:{labels:prodRev.map(p=>p.name),datasets:[{data:prodRev.map(p=>p.rev),backgroundColor:blue}]},options:{plugins:{legend:{display:false}},scales:{x:{ticks:{maxRotation:30,minRotation:30}},y:{ticks:{callback:v=>"₹"+(v/100000).toFixed(0)+"L"}}}}});
// Draw revenue by region as a doughnut chart.
new Chart(cRegion,{type:"doughnut",data:{labels:D.regions,datasets:[{data:regRev,backgroundColor:["#1F4E79","#2E75B6","#9DC3E6"]}]},options:{plugins:{legend:{position:"bottom"}}}});

// Build the monthly summary table: a header row plus one row per month.
document.getElementById("tMonthly").innerHTML =
  // Table header row: Month, Revenue, Units.
  "<tr><th>Month</th><th>Revenue</th><th>Units</th></tr>" +
  // One table row per month with that month's revenue and units sold.
  D.months.map((m,i)=>`<tr><td>${m}</td><td class="num">${inr(monthlyRev[i])}</td><td class="num">${monthlyUnits[i].toLocaleString("en-IN")}</td></tr>`).join("");
