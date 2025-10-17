(function() {
const calendarEl = document.getElementById('ordersCalendar');

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    height: '80vh',
    expandRows: true,
    selectable: true, // ✅ تفعيل تحديد الأيام
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,listWeek'
    },

    // 📅 لما المستخدم يضغط على يوم فارغ
    dateClick: function(info) {
      Swal.fire({
        title: 'Add New Order',
        html: `
          <input id="orderTitle" class="swal2-input" placeholder="Order title (e.g. Order #110)">
          <input id="orderCustomer" class="swal2-input" placeholder="Customer name">
          <input id="orderPrice" class="swal2-input" placeholder="Price (e.g. $100)">
          <select id="orderStatus" class="swal2-input">
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        `,
        confirmButtonText: 'Save',
        showCancelButton: true,
        confirmButtonColor: '#007bff',
        preConfirm: () => {
          const title = document.getElementById('orderTitle').value;
          const customer = document.getElementById('orderCustomer').value;
          const price = document.getElementById('orderPrice').value;
          const status = document.getElementById('orderStatus').value;

          if (!title || !customer || !price) {
            Swal.showValidationMessage('Please fill all fields');
            return false;
          }

          return { title, customer, price, status };
        }
      }).then((result) => {
        if (result.isConfirmed) {
          const { title, customer, price, status } = result.value;
          let cssClass = 'event-pending';
          if (status === 'Completed') cssClass = 'event-completed';
          if (status === 'Cancelled') cssClass = 'event-cancelled';

          // 🟢 أضف الطلب داخل التقويم مباشرة
          calendar.addEvent({
            title: title,
            start: info.dateStr,
            extendedProps: { customer, price, status, cssClass }
          });

          Swal.fire('Saved!', 'Order has been added.', 'success');
        }
      });
    },

    // 📦 عرض تفاصيل الطلب عند الضغط
    eventClick: function(info) {
      const data = info.event.extendedProps;
      Swal.fire({
        title: info.event.title,
        html: `
          <b>Customer:</b> ${data.customer}<br>
          <b>Price:</b> ${data.price}<br>
          <b>Status:</b> ${data.status}
        `,
        icon: 'info',
        confirmButtonColor: '#007bff'
      });
    },

    // 🎨 شكل عرض الحدث داخل اليوم
    eventContent: function(arg) {
      const data = arg.event.extendedProps;
      return {
        html: `
          <div class="${data.cssClass}">
            <strong>${arg.event.title}</strong><br>
            <small>${data.customer}</small><br>
            <small>${data.price} - ${data.status}</small>
          </div>
        `
      };
    }
  });

  calendar.render();
})();