"use client";

import React, { useState } from "react";
import {
  RiBarcodeLine,
  RiAddLine,
  RiSubtractLine,
  RiDeleteBinLine,
  RiPrinterLine,
  RiExchangeDollarLine,
  RiBankCardLine,
  RiTimeLine,
  RiCheckLine,
  RiCloseLine,
  RiQrCodeLine,
  RiCoinsLine,
  RiStore2Line,
  RiReceiptLine,
  RiShieldCheckLine,
} from "@remixicon/react";

interface Product {
  id: string;
  name: string;
  sku: string;
  category: "wood" | "retail" | "hardware";
  price: number;
  unit: string;
  cft?: number;
  taxRate: number; // 0.18 for 18% GST
  badge?: string;
}

interface CartItem extends Product {
  quantity: number;
}

const SAMPLE_PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Pine Wood Plank 12ft",
    sku: "WOD-PN-12",
    category: "wood",
    price: 3450,
    unit: "Pcs (2.4 CFT)",
    cft: 2.4,
    taxRate: 0.18,
    badge: "Wood Pack",
  },
  {
    id: "p2",
    name: "Teak Hardwood Beam 16ft",
    sku: "WOD-TK-16",
    category: "wood",
    price: 14200,
    unit: "Serial Piece (6.8 CFT)",
    cft: 6.8,
    taxRate: 0.18,
    badge: "Serial #TK-402",
  },
  {
    id: "p3",
    name: "Industrial Wood Varnish 5L",
    sku: "CHM-VR-05",
    category: "hardware",
    price: 4100,
    unit: "5 Liter Can",
    taxRate: 0.18,
    badge: "Hardware",
  },
  {
    id: "p4",
    name: "Cotton Work Uniform (Set)",
    sku: "GAR-UNI-XL",
    category: "retail",
    price: 2600,
    unit: "Set / XL",
    taxRate: 0.18,
    badge: "Retail",
  },
  {
    id: "p5",
    name: "Heavy Duty Brass Hinges (Pair)",
    sku: "HRD-HN-04",
    category: "hardware",
    price: 850,
    unit: "Pair",
    taxRate: 0.18,
    badge: "Fast Mover",
  },
  {
    id: "p6",
    name: "Safety Helmet & Visor",
    sku: "SAF-HL-01",
    category: "retail",
    price: 1800,
    unit: "Pcs",
    taxRate: 0.18,
    badge: "Safety",
  },
];

export function POSSimulator() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "wood" | "retail" | "hardware">("all");
  const [cart, setCart] = useState<CartItem[]>([
    { ...SAMPLE_PRODUCTS[0], quantity: 2 },
    { ...SAMPLE_PRODUCTS[4], quantity: 1 },
  ]);
  const [applyGst, setApplyGst] = useState(true);
  const [discountAmount, setDiscountAmount] = useState(500);
  const [isReceiptOpen, setIsReceiptOpen] = useState(false);
  const [paymentSuccessMessage, setPaymentSuccessMessage] = useState<string | null>(null);
  const [shiftSales, setShiftSales] = useState(148500);

  // Cart operations
  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  // Calculations
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalCft = cart.reduce((acc, item) => acc + (item.cft || 0) * item.quantity, 0);
  const gstTax = applyGst ? Math.round(subtotal * 0.18) : 0;
  const grandTotal = Math.max(0, subtotal + gstTax - discountAmount);

  const filteredProducts =
    selectedCategory === "all"
      ? SAMPLE_PRODUCTS
      : SAMPLE_PRODUCTS.filter((p) => p.category === selectedCategory);

  const handleCheckout = (method: "Cash" | "Card" | "Credit") => {
    if (cart.length === 0) return;
    setShiftSales((prev) => prev + grandTotal);
    setPaymentSuccessMessage(`Payment of PKR ${grandTotal.toLocaleString()} approved via ${method}!`);
    setIsReceiptOpen(true);
  };

  return (
    <section id="simulator" className="py-20 md:py-28 bg-[#001428] text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#0074d9]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-bold text-emerald-400 mb-4">
            <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Interactive Counter Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-4">
            Test the Commercial POS counter in real time
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Click items to add to the active ticket, test CFT volume calculations for timber lots, toggle FBR GST rates, and preview the fiscal thermal receipt.
          </p>
        </div>

        {/* Simulator Main Frame */}
        <div className="rounded-3xl border border-white/20 bg-[#001a36] shadow-2xl overflow-hidden">
          
          {/* Top Operational Bar */}
          <div className="p-4 md:px-6 bg-[#001124] border-b border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 font-bold text-white">
                <RiStore2Line className="size-4 text-[#4da3ff]" />
                Commercial POS Terminal #01 (Lahore Branch)
              </span>
              <span className="hidden sm:inline text-slate-500">|</span>
              <span className="text-slate-400 hidden sm:inline">
                Cashier: <strong className="text-white">Farhan Ali</strong> (Shift #104)
              </span>
            </div>

            {/* Shift Drawer live readout */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 bg-[#002447] px-3 py-1.5 rounded-lg border border-white/10">
                <RiCoinsLine className="size-3.5 text-emerald-400" />
                <span className="text-slate-300 font-medium">Drawer Total:</span>
                <span className="font-extrabold text-white">PKR {shiftSales.toLocaleString()}</span>
              </div>

              <div className="flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 px-2.5 py-1.5 rounded-lg font-semibold text-[11px]">
                <RiShieldCheckLine className="size-3.5" />
                <span>FBR Fiscal Sync: Active</span>
              </div>
            </div>
          </div>

          {/* Body: 2 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column (Catalog & Filters): 7 cols */}
            <div className="lg:col-span-7 p-5 md:p-6 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between">
              <div>
                {/* Category Filter Tabs */}
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  {[
                    { id: "all", label: "All Items" },
                    { id: "wood", label: "Wood Trading Pack (CFT)" },
                    { id: "retail", label: "General Retail" },
                    { id: "hardware", label: "Hardware & Tools" },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id as any)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        selectedCategory === cat.id
                          ? "bg-[#0074d9] text-white shadow-md shadow-[#0074d9]/30"
                          : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => addToCart(product)}
                      className="p-3.5 rounded-2xl bg-[#00142b] border border-white/10 hover:border-[#0074d9] hover:bg-[#001c3d] transition-all cursor-pointer group flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-mono text-slate-400">{product.sku}</span>
                          {product.badge && (
                            <span className="text-[9px] font-bold text-[#4da3ff] bg-[#0074d9]/15 px-1.5 py-0.5 rounded">
                              {product.badge}
                            </span>
                          )}
                        </div>
                        <h4 className="text-xs font-bold text-white group-hover:text-[#4da3ff] transition-colors leading-tight mb-1">
                          {product.name}
                        </h4>
                        <p className="text-[11px] text-slate-400">{product.unit}</p>
                      </div>

                      <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between">
                        <span className="text-xs font-extrabold text-white">
                          PKR {product.price.toLocaleString()}
                        </span>
                        <span className="size-6 rounded-lg bg-[#0074d9]/20 text-[#4da3ff] flex items-center justify-center text-xs font-bold group-hover:bg-[#0074d9] group-hover:text-white transition-all">
                          <RiAddLine className="size-4" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Quick-Tip */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <RiBarcodeLine className="size-4 text-[#4da3ff]" />
                  Tap any product card above to add to active counter ticket.
                </span>
                {totalCft > 0 && (
                  <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Total Volume: {totalCft.toFixed(1)} CFT
                  </span>
                )}
              </div>
            </div>

            {/* Right Column (Ticket / Cart & Checkout): 5 cols */}
            <div className="lg:col-span-5 p-5 md:p-6 bg-[#001326] flex flex-col justify-between">
              <div>
                {/* Active Ticket Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                  <div>
                    <h3 className="text-sm font-bold text-white">Active Order Ticket #INV-9204</h3>
                    <span className="text-[11px] text-slate-400">Customer: Malik Timber Works (Walking/Credit)</span>
                  </div>
                  {cart.length > 0 && (
                    <button
                      onClick={clearCart}
                      className="text-[11px] font-semibold text-red-400 hover:text-red-300 transition-colors"
                    >
                      Clear All
                    </button>
                  )}
                </div>

                {/* Cart Items Scroll area */}
                <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                  {cart.length === 0 ? (
                    <div className="text-center py-10 text-slate-500 text-xs">
                      No items in ticket. Click product cards on the left to add items.
                    </div>
                  ) : (
                    cart.map((item) => (
                      <div
                        key={item.id}
                        className="p-3 rounded-xl bg-[#001e3d] border border-white/10 flex items-center justify-between text-xs"
                      >
                        <div className="flex-1 pr-2">
                          <h5 className="font-bold text-white line-clamp-1">{item.name}</h5>
                          <span className="text-[10px] text-slate-400">
                            PKR {item.price.toLocaleString()} × {item.quantity}
                            {item.cft ? ` (${(item.cft * item.quantity).toFixed(1)} CFT)` : ""}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="flex items-center bg-[#001124] rounded-lg border border-white/10">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="size-6 flex items-center justify-center text-slate-300 hover:text-white"
                            >
                              <RiSubtractLine className="size-3" />
                            </button>
                            <span className="px-1.5 font-mono text-xs font-bold text-white">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="size-6 flex items-center justify-center text-slate-300 hover:text-white"
                            >
                              <RiAddLine className="size-3" />
                            </button>
                          </div>

                          <span className="font-extrabold text-white min-w-[70px] text-right">
                            PKR {(item.price * item.quantity).toLocaleString()}
                          </span>

                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-slate-500 hover:text-red-400 transition-colors ml-1"
                          >
                            <RiDeleteBinLine className="size-3.5" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Calculations & Checkout */}
              <div className="pt-4 border-t border-white/10 space-y-2 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Subtotal ({cart.reduce((a, b) => a + b.quantity, 0)} items)</span>
                  <span>PKR {subtotal.toLocaleString()}</span>
                </div>

                <div className="flex justify-between items-center text-slate-300">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={applyGst}
                      onChange={(e) => setApplyGst(e.target.checked)}
                      className="rounded border-white/20 accent-[#0074d9]"
                    />
                    <span>GST Sales Tax (18% FBR)</span>
                  </label>
                  <span>PKR {gstTax.toLocaleString()}</span>
                </div>

                <div className="flex justify-between text-slate-300">
                  <span>Prompt Pay Customer Discount</span>
                  <span className="text-emerald-400">- PKR {discountAmount.toLocaleString()}</span>
                </div>

                <div className="pt-2 border-t border-white/10 flex justify-between text-base font-extrabold text-white">
                  <span>Net Payable</span>
                  <span className="text-[#4da3ff]">PKR {grandTotal.toLocaleString()}</span>
                </div>

                {/* Payment Methods */}
                <div className="grid grid-cols-3 gap-2 pt-3">
                  <button
                    disabled={cart.length === 0}
                    onClick={() => handleCheckout("Cash")}
                    className="py-2.5 rounded-xl bg-[#0074d9] hover:bg-[#005bb5] disabled:opacity-40 text-white font-bold text-xs flex flex-col items-center justify-center transition-all cursor-pointer"
                  >
                    <RiExchangeDollarLine className="size-4 mb-0.5" />
                    <span>Cash</span>
                  </button>

                  <button
                    disabled={cart.length === 0}
                    onClick={() => handleCheckout("Card")}
                    className="py-2.5 rounded-xl bg-[#002447] hover:bg-[#003466] disabled:opacity-40 text-slate-200 font-bold text-xs flex flex-col items-center justify-center border border-white/10 transition-all cursor-pointer"
                  >
                    <RiBankCardLine className="size-4 mb-0.5" />
                    <span>Card / POS</span>
                  </button>

                  <button
                    disabled={cart.length === 0}
                    onClick={() => handleCheckout("Credit")}
                    className="py-2.5 rounded-xl bg-[#002447] hover:bg-[#003466] disabled:opacity-40 text-amber-300 font-bold text-xs flex flex-col items-center justify-center border border-amber-500/30 transition-all cursor-pointer"
                  >
                    <RiReceiptLine className="size-4 mb-0.5" />
                    <span>Credit / Due</span>
                  </button>
                </div>

                {paymentSuccessMessage && (
                  <div className="p-2 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[11px] font-semibold flex items-center justify-between mt-2">
                    <span>{paymentSuccessMessage}</span>
                    <button
                      onClick={() => setIsReceiptOpen(true)}
                      className="underline text-white hover:text-emerald-200 font-bold ml-2"
                    >
                      View Receipt
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Modal: Thermal Fiscal Receipt Preview */}
        {isReceiptOpen && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white text-slate-900 rounded-3xl max-w-sm w-full p-6 shadow-2xl relative animate-in fade-in zoom-in-95">
              <button
                onClick={() => setIsReceiptOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900"
              >
                <RiCloseLine className="size-5" />
              </button>

              {/* Thermal Receipt Visual */}
              <div className="text-center pb-4 border-b border-dashed border-slate-300">
                <div className="font-extrabold text-base uppercase tracking-tight text-slate-900">
                  Commercial POS
                </div>
                <div className="text-[11px] text-slate-600 font-medium">
                  Branch #01 — Lahore Commercial Center
                </div>
                <div className="text-[10px] text-slate-500 font-mono mt-1">
                  STRN: 3277876123489 | NTN: 8912401-2
                </div>
                <div className="mt-2 text-[10px] bg-slate-100 font-mono py-1 px-2 rounded inline-block text-slate-700">
                  FBR Invoice #: FBR-PK-2026-009841
                </div>
              </div>

              {/* Receipt Body */}
              <div className="py-3 text-[11px] font-mono space-y-1.5 border-b border-dashed border-slate-300">
                <div className="flex justify-between text-slate-500">
                  <span>Date: {new Date().toLocaleDateString()}</span>
                  <span>Time: {new Date().toLocaleTimeString()}</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Cashier: Farhan Ali</span>
                  <span>Shift: #104</span>
                </div>
              </div>

              {/* Line items table */}
              <div className="py-3 text-[11px] font-mono space-y-1.5 border-b border-dashed border-slate-300">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <div>
                      <div>{item.name}</div>
                      <div className="text-[10px] text-slate-500">
                        {item.quantity} x PKR {item.price.toLocaleString()}
                        {item.cft ? ` [${(item.cft * item.quantity).toFixed(1)} CFT]` : ""}
                      </div>
                    </div>
                    <span className="font-bold">
                      PKR {(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="py-3 text-xs font-mono space-y-1 border-b border-dashed border-slate-300">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span>PKR {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>GST Sales Tax (18%)</span>
                  <span>PKR {gstTax.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Discount</span>
                  <span>-PKR {discountAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-bold text-sm text-slate-900 pt-1 border-t border-slate-200">
                  <span>GRAND TOTAL</span>
                  <span>PKR {grandTotal.toLocaleString()}</span>
                </div>
              </div>

              {/* QR Code & FBR footer */}
              <div className="pt-4 text-center">
                <div className="size-24 mx-auto bg-slate-100 border border-slate-300 rounded-lg flex items-center justify-center p-2 mb-2">
                  <RiQrCodeLine className="size-16 text-slate-800" />
                </div>
                <span className="text-[9px] font-mono text-slate-500 block">
                  Scan QR via FBR Tax Asaan App to verify receipt
                </span>
                <span className="text-[10px] font-semibold text-slate-800 mt-1 block">
                  Thank you for shopping with us!
                </span>

                <button
                  onClick={() => setIsReceiptOpen(false)}
                  className="mt-4 w-full py-2.5 rounded-full bg-[#0074d9] hover:bg-[#005bb5] text-white text-xs font-bold transition-colors"
                >
                  Close Receipt
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
