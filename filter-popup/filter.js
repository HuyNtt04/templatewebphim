document.addEventListener("DOMContentLoaded", () => {
  const popupHTML = `
<div id="filterPopup" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 pointer-events-none transition-all duration-300">
  <div class="bg-[#1c1c1c] text-white p-6 rounded-xl w-full max-w-2xl transform scale-95 transition-all duration-300">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-bold">Bộ lọc phim</h2>
      <button onclick="toggleFilter()" class="text-gray-400 hover:text-red-400 text-xl">&times;</button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Quốc gia -->
      <div>
        <label class="block text-sm text-gray-400 mb-1">Quốc gia</label>
        <select class="w-full px-3 py-2 rounded bg-white/10 text-white">
          <option>-- Chọn quốc gia --</option>
          <option>Việt Nam</option>
          <option>Hàn Quốc</option>
          <option>Trung Quốc</option>
          <option>Mỹ</option>
          <option>Thái Lan</option>
        </select>
      </div>

      <!-- Loại phim -->
      <div>
        <label class="block text-sm text-gray-400 mb-1">Loại phim</label>
        <select class="w-full px-3 py-2 rounded bg-white/10 text-white">
          <option>Phim lẻ</option>
          <option>Phim bộ</option>
        </select>
      </div>

      <!-- Xếp hạng -->
      <div>
        <label class="block text-sm text-gray-400 mb-1">Xếp hạng</label>
        <select class="w-full px-3 py-2 rounded bg-white/10 text-white">
          <option>T18</option>
          <option>T16</option>
          <option>T13</option>
          <option>P</option>
        </select>
      </div>

      <!-- Thể loại -->
      <div>
        <label class="block text-sm text-gray-400 mb-1">Thể loại</label>
        <select class="w-full px-3 py-2 rounded bg-white/10 text-white">
          <option>Hành động</option>
          <option>Tình cảm</option>
          <option>Kinh dị</option>
          <option>Hài hước</option>
          <option>Hoạt hình</option>
        </select>
      </div>

      <!-- Phiên bản -->
      <div>
        <label class="block text-sm text-gray-400 mb-1">Phiên bản</label>
        <select class="w-full px-3 py-2 rounded bg-white/10 text-white">
          <option>Thuyết minh</option>
          <option>Vietsub</option>
          <option>Raw</option>
        </select>
      </div>

      <!-- Năm sản xuất -->
      <div>
        <label class="block text-sm text-gray-400 mb-1">Năm sản xuất</label>
        <input type="number" class="w-full px-3 py-2 rounded bg-white/10 text-white placeholder-gray-400" placeholder="VD: 2024">
      </div>

      <!-- Sắp xếp -->
      <div>
        <label class="block text-sm text-gray-400 mb-1">Sắp xếp</label>
        <select class="w-full px-3 py-2 rounded bg-white/10 text-white">
          <option>Mới nhất</option>
          <option>Cũ nhất</option>
          <option>Tên A-Z</option>
          <option>Tên Z-A</option>
        </select>
      </div>
    </div>

    <div class="flex justify-end gap-3 mt-6">
      <button onclick="toggleFilter()" class="px-4 py-2 text-gray-300 hover:text-white">Huỷ</button>
      <button class="px-4 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300">Áp dụng</button>
    </div>
  </div>
</div>`;

  document.getElementById("filterContainer").innerHTML = popupHTML;
  document.getElementById("openFilterBtn").addEventListener("click", toggleFilter);
});

function toggleFilter() {
  const popup = document.getElementById("filterPopup");
  const inner = popup.querySelector("div");
  const isHidden = popup.classList.contains("pointer-events-none");

  popup.classList.toggle("opacity-0", !isHidden);
  popup.classList.toggle("pointer-events-none", !isHidden);
  inner.classList.toggle("scale-95", !isHidden);
  inner.classList.toggle("scale-100", isHidden);
}
