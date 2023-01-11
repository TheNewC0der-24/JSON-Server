let tbody = document.getElementById('tbody'); // Get table body

// Fetch data from API
fetch("https://thenewc0der-24.github.io/JSON-Server/Database/db.json")
    .then(response => response.json())
    .then(data => {
        data.user.map(item => {
            tbody.append(td_fun(item)); // Append table data (td) to table body (tbody)
        });
    })

// Create Table data
function td_fun({ profile, name, email, status, role }) {
    let td = document.createElement('tr');
    td.innerHTML = `
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                            <div class="flex-shrink-0 h-10 w-10">
                                <img src="${profile}"
                                    class="h-10 w-10 rounded-full" alt="profile">
                            </div>
                            <div class="ml-4">
                                <div class="text-sm font-medium text-gray-900">
                                    ${name}
                                </div>
                                <div class="text-sm text-gray-500">
                                    ${email}
                                </div>
                            </div>
                        </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <span
                            class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            ${status}
                        </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <span class="text-sm text-gray-500">
                            ${role}
                        </span>
                    </td>
                    `;
    return td;
}