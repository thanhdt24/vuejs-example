<template>
  <div class="mt-5 mb-5 d-flex justify-content-around">
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="bao_mat"
             v-model="docType">
      <label class="form-check-label" for="inlineRadio1">
        <span class="font-weight-bold">Bảo mật</span>
      </label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="hdtv"
             v-model="docType">
      <label class="form-check-label" for="inlineRadio2">
        <span class="font-weight-bold">Hợp đồng thử việc</span>
      </label>
    </div>
  </div>
  <div v-if="docType === 'bao_mat'" class="mb-3">
    <div class="input-group mb-3">
      <label for="inputCreateDate" class="input-group-text">Ngày tạo hợp đồng</label>
      <input type="text" class="form-control" id="inputCreateDate" placeholder="01/01/2022" v-model="create_date">
    </div>
    <div class="input-group mb-3">
      <label for="inputName" class="input-group-text">Người lao động</label>
      <input type="text" class="form-control" id="inputName" placeholder="Nguyễn Văn A" v-model="name">
    </div>
    <div class="input-group mb-3">
      <label for="inputPassportNumber" class="input-group-text">Số hộ chiếu/CMND</label>
      <input type="text" class="form-control" id="inputPassportNumber" placeholder="0123456789"
             v-model="partport_number">
    </div>
    <div class="input-group mb-3">
      <label for="inputPassportDate" class="input-group-text">Ngày cấp</label>
      <input type="text" class="form-control" id="inputPassportDate" placeholder="01/01/2022"
             v-model="partport_create_date">
    </div>
    <div class="input-group mb-3">
      <label for="inputPassportAddress" class="input-group-text">Cấp tại</label>
      <input type="text" class="form-control" id="inputPassportAddress" placeholder="Xóm A, Xã B, Huyện C, Tỉnh D"
             v-model="partport_address">
    </div>
    <div class="input-group mb-3">
      <label for="inputPermanentAddress" class="input-group-text">Địa chỉ thường trú</label>
      <input type="text" class="form-control" id="inputPermanentAddress" placeholder="Xóm A, Xã B, Huyện C, Tỉnh D"
             v-model="permanent_address">
    </div>
    <div class="text-center">
      <button type="submit" class="btn btn-primary mr-3" @click="renderSecurityTemplate">
        Render file
      </button>
      <button type="submit" class="btn btn-warning" @click="resetSecurityData()">
        Reset data
      </button>
    </div>
  </div>

  <div v-if="docType === 'hdtv'" class="mb-3">
    <div class="input-group mb-3">
      <label for="inputContractCode" class="input-group-text">Số hợp đồng</label>
      <input type="text" class="form-control mr-3" id="inputContractCode" placeholder="0407/2022/NTN"
             v-model="contract_code">
      <label for="inputDay" class="input-group-text">Ngày</label>
      <input type="number" class="form-control mr-3" id="inputDay" placeholder="04" v-model="day">
      <label for="inputMonth" class="input-group-text">Tháng</label>
      <input type="number" class="form-control mr-3" id="inputMonth" placeholder="07" v-model="month">
      <label for="inputYear" class="input-group-text">Năm</label>
      <input type="number" class="form-control" id="inputYear" placeholder="2022" v-model="year">
    </div>
    <div class="input-group mb-3">
      <label for="inputEmployee" class="input-group-text">Người lao động</label>
      <input type="text" class="form-control mr-3" id="inputEmployee" placeholder="Nguyễn Thị A"
             v-model="employee">
      <label for="inputBirthDate" class="input-group-text">Ngày sinh</label>
      <input type="text" class="form-control mr-3" id="inputBirthDate" placeholder="01/01/2001"
             v-model="birthdate">
      <label for="inputEducation" class="input-group-text">Trình độ học vấn</label>
      <input type="text" class="form-control" id="inputEducation" placeholder="Đại học"
             v-model="education">
    </div>
    <div class="input-group mb-3">
      <label for="inputPermanentResidence" class="input-group-text">Hộ khẩu thường trú</label>
      <input type="text" class="form-control mr-3" id="inputPermanentResidence"
             placeholder="số , ngách Nguyễn Cơ Thạch, Bắc Ninh"
             v-model="permanent_residence">
      <label for="inputAddress" class="input-group-text">Nơi ở hiện tại</label>
      <input type="text" class="form-control" id="inputAddress"
             placeholder="số , ngõ Mễ Trì Hạ, Mễ Trì, Nam Từ Liêm, Hà Nội"
             v-model="address">
    </div>
    <div class="input-group mb-3">
      <label for="inputIdCardNumber" class="input-group-text">Số CMND</label>
      <input type="number" class="form-control mr-3" id="inputIdCardNumber" placeholder="1258526820000"
             v-model="id_card_number">
      <label for="inputIdCardDate" class="input-group-text">Ngày cấp</label>
      <input type="text" class="form-control mr-3" id="inputIdCardDate" placeholder="01/01/2011"
             v-model="id_card_date">
      <label for="inputPermanentResidence" class="input-group-text">Cấp tại</label>
      <input type="text" class="form-control" id="inputPermanentResidence"
             placeholder="số , ngách Nguyễn Cơ Thạch, Bắc Ninh"
             v-model="id_card_address">
    </div>
    <div class="input-group mb-3">
      <label for="inputEmail" class="input-group-text">Email</label>
      <input type="text" class="form-control mr-3" id="inputEmail" placeholder="abc@gmail.com"
             v-model="email">
      <label for="inputPhone" class="input-group-text">SĐT</label>
      <input type="text" class="form-control" id="inputPhone" placeholder="0987654321"
             v-model="phone">
    </div>
    <div class="input-group mb-3">
      <label for="inputJobTitle" class="input-group-text">Chức danh chuyên môn</label>
      <input type="text" class="form-control" id="inputJobTitle" placeholder="Manual Tester"
             v-model="job_title">
    </div>
    <div class="form-floating mb-3">
      <label for="inputJobDescription" class="input-group-text">Công việc phụ trách</label>
      <textarea class="form-control" placeholder="-	Làm việc với Business Analyst (BA) và những người liên quan để hiểu và làm rõ tài liệu requirement để test.
-	Test App, API, Web là các sản phẩm học tiếng Anh." id="inputJobDescription" rows="5"
                v-model="job_description"></textarea>
    </div>
    <div class="input-group mb-3">
      <label for="inputPermanentResidence" class="input-group-text">Thời hạn hợp đồng (tháng)</label>
      <input type="number" class="form-control mr-3" id="inputPermanentResidence" placeholder="2"
             v-model="contract_period">
      <label for="inputExpirationDate" class="input-group-text">Ngày hết hạn hợp đồng</label>
      <input type="text" class="form-control" id="inputExpirationDate" placeholder="03/09/2022"
             v-model="expiration_date">
    </div>
    <div class="input-group mb-3">
      <label for="inputWorkLocation" class="input-group-text">Địa điểm làm việc</label>
      <input type="text" class="form-control" id="inputWorkLocation"
             placeholder="Trụ sở chính: D09, A10 KĐT Nam Trung Yên, Cầu Giấy, Hà Nội."
             v-model="work_location">
    </div>
    <div class="input-group mb-3">
      <label for="inputProbationarySalary" class="input-group-text">Mức lương thử việc (VNĐ)</label>
      <input type="text" class="form-control mr-3" id="inputProbationarySalary" placeholder="1.200.000"
             v-model="probationary_salary">
      <label for="inputSalaryAfterProbationary" class="input-group-text">Mức lương sau thử việc (VNĐ)</label>
      <input type="text" class="form-control" id="inputSalaryAfterProbationary" placeholder="1.000.000"
             v-model="salary_after_probation">
    </div>
    <div class="input-group mb-3">
      <label for="inputMealAllowance" class="input-group-text">Phụ cấp tiền ăn (VNĐ)</label>
      <input type="text" class="form-control mr-3" id="inputMealAllowance" placeholder="700.000"
             v-model="meal_allowance">
      <label for="inputTelephoneAllowance" class="input-group-text">Phụ cấp điện thoại (VNĐ)</label>
      <input type="text" class="form-control mr-3" id="inputTelephoneAllowance" placeholder="200.000"
             v-model="telephone_allowance">
      <label for="inputCostumeAllowance" class="input-group-text">Phụ cấp trang phục (VNĐ)</label>
      <input type="text" class="form-control" id="inputCostumeAllowance" placeholder="400.000"
             v-model="costume_allowance">
    </div>
    <div class="input-group mb-3">
      <label for="inputFuelAllowance" class="input-group-text">Phụ cấp xăng xe (VNĐ)</label>
      <input type="text" class="form-control mr-3" id="inputFuelAllowance" placeholder="500.000"
             v-model="fuel_allowance">
      <label for="inputRulesComplianceBonus" class="input-group-text">Thưởng tuân thủ nội quy (VNĐ)</label>
      <input type="text" class="form-control mr-3" id="inputRulesComplianceBonus" placeholder="1.000.000"
             v-model="rules_compliance_bonus">
      <label for="inputRewardCompleteTask" class="input-group-text">Thưởng hoàn thành nhiệm vụ (VNĐ)</label>
      <input type="text" class="form-control" id="inputRewardCompleteTask" placeholder="400.000"
             v-model="reward_complete_task">
    </div>
    <div class="input-group mb-3">
      <label for="inputProbationarySalary" class="input-group-text">Loại lương</label>
      <select class="form-select" aria-label="Default select example" v-model="salary_type">
        <option value="" selected>Chọn loại lương</option>
        <option value="net">Lương Net</option>
        <option value="gross">Lương Gross</option>
      </select>
    </div>
    <div class="text-center">
      <button type="submit" class="btn btn-primary mr-3" @click="renderProbationaryContracts">
        Render file
      </button>
      <button type="submit" class="btn btn-warning" @click="resetProbationaryContractsData()">
        Reset data
      </button>
    </div>
  </div>
</template>
<script>

import DocxTemplate from "docxtemplater";
import PizZip from "pizzip";
import PizZipUtils from "pizzip/utils/index.js";
import {saveAs} from "file-saver";

let create_date;
let name;
let partport_number;
let partport_create_date;
let partport_address;
let permanent_address;

let contract_code;
let day;
let month;
let year;
let employee;
let birthdate;
let education;
let permanent_residence;
let address;
let id_card_number;
let id_card_date;
let id_card_address;
let email;
let phone;
let job_title;
let job_description;
let contract_period;
let expiration_date;
let work_location;
let probationary_salary;
let salary_after_probation;
let meal_allowance;
let telephone_allowance;
let costume_allowance;
let fuel_allowance;
let rules_compliance_bonus;
let reward_complete_task;
let salary_type;
let salary_type_wording;
export default {
  name: "init-docx",
  data() {
    return {
      docType: 'bao_mat',
      create_date: '',
      name: '',
      partport_number: '',
      partport_create_date: '',
      partport_address: '',
      permanent_address: '',

      contract_code: '',
      day: '',
      month: '',
      year: '',
      employee: '',
      birthdate: '',
      education: '',
      permanent_residence: '',
      address: '',
      id_card_number: '',
      id_card_date: '',
      id_card_address: '',
      email: '',
      phone: '',
      job_title: '',
      job_description: '',
      contract_period: '',
      expiration_date: '',
      work_location: '',
      probationary_salary: '',
      salary_after_probation: '',
      meal_allowance: '',
      telephone_allowance: '',
      costume_allowance: '',
      fuel_allowance: '',
      rules_compliance_bonus: '',
      reward_complete_task: '',
      salary_type: '',
      salary_type_wording: ''
    }
  },
  methods: {
    renderSecurityTemplate() {
      create_date = this.create_date === '' ? '...........' : this.create_date;
      name = this.name === '' ? '..................' : this.name;
      partport_number = this.partport_number === '' ? '................' : this.partport_number;
      partport_create_date = this.partport_create_date === '' ? '...............' : this.partport_create_date;
      partport_address = this.partport_address === '' ? '..............................................' : this.partport_address;
      permanent_address = this.permanent_address === '' ? '..............................................' : this.permanent_address;
      PizZipUtils.getBinaryContent(
          'ReportTemplates/bao_mat_template.docx',
          function (error, content) {
            if (error) {
              throw error;
            }
            const zip = new PizZip(content);
            const doc = new DocxTemplate(zip, {
              paragraphLoop: true,
              linebreaks: true,
            });

            doc.render({
              create_date: create_date,
              name: name,
              partport_number: partport_number,
              partport_create_date: partport_create_date,
              partport_address: partport_address,
              permanent_address: permanent_address
            });

            const out = doc.getZip().generate({
              type: "blob",
              mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            });

            saveAs(out, "hop_dong_bao_mat_thong_tin_" + name + ".docx");
          }
      );
    },

    renderProbationaryContracts() {
      contract_code = this.contract_code === '' ? '...........' : this.contract_code;
      day = this.day === '' ? '...' : this.day;
      month = this.month === '' ? '...' : this.month;
      year = this.year === '' ? '...' : this.year;
      employee = this.employee === '' ? '................' : this.employee;
      birthdate = this.birthdate === '' ? '...............' : this.birthdate;
      education = this.education === '' ? '...............' : this.education;
      permanent_residence = this.permanent_residence === '' ? '..............................................' : this.permanent_residence;
      address = this.address === '' ? '..............................................' : this.address;
      id_card_number = this.id_card_number === '' ? '.............' : this.id_card_number;
      id_card_date = this.id_card_date === '' ? '.............' : this.id_card_date;
      id_card_address = this.id_card_address === '' ? '..............................................' : this.id_card_address;
      email = this.email === '' ? '..............................................' : this.email;
      phone = this.phone === '' ? '..............................................' : this.phone;
      job_title = this.job_title === '' ? '......................' : this.job_title;
      job_description = this.job_description === '' ? '................................................................................................................................................\n' +
          '................................................................................................................................................\n' +
          '................................................................................................................................................' : this.job_description;
      contract_period = this.contract_period === '' ? '....' : this.contract_period;
      expiration_date = this.expiration_date === '' ? '..................' : this.expiration_date;
      work_location = this.work_location === '' ? '..............................................' : this.work_location;
      probationary_salary = this.probationary_salary === '' ? '.................' : this.probationary_salary;
      salary_after_probation = this.salary_after_probation === '' ? '.............' : this.salary_after_probation;
      meal_allowance = this.meal_allowance === '' ? '................' : this.meal_allowance;
      telephone_allowance = this.telephone_allowance === '' ? '................' : this.telephone_allowance;
      costume_allowance = this.costume_allowance === '' ? '...................' : this.costume_allowance;
      fuel_allowance = this.fuel_allowance === '' ? '...................' : this.fuel_allowance;
      rules_compliance_bonus = this.rules_compliance_bonus === '' ? '...................' : this.rules_compliance_bonus;
      reward_complete_task = this.reward_complete_task === '' ? '...................' : this.reward_complete_task;
      salary_type = this.salary_type === '' ? '.........' : this.salary_type;
      salary_type_wording = this.salary_type === '' ? '.........' : this.salary_type === 'net' ? 'đã' : 'chưa';
      PizZipUtils.getBinaryContent(
          'ReportTemplates/hop_dong_thu_viec_template.docx',
          function (error, content) {
            if (error) {
              throw error;
            }
            const zip = new PizZip(content);
            const doc = new DocxTemplate(zip, {
              paragraphLoop: true,
              linebreaks: true,
            });

            doc.render({
              contract_code: contract_code,
              day: day,
              month: month,
              year: year,
              employee: employee,
              birthdate: birthdate,
              education: education,
              permanent_residence: permanent_residence,
              address: address,
              id_card_number: id_card_number,
              id_card_date: id_card_date,
              id_card_address: id_card_address,
              email: email,
              phone: phone,
              job_title: job_title,
              job_description: job_description,
              contract_period: contract_period,
              expiration_date: expiration_date,
              work_location: work_location,
              probationary_salary: probationary_salary,
              salary_after_probation: salary_after_probation,
              meal_allowance: meal_allowance,
              telephone_allowance: telephone_allowance,
              costume_allowance: costume_allowance,
              fuel_allowance: fuel_allowance,
              rules_compliance_bonus: rules_compliance_bonus,
              reward_complete_task: reward_complete_task,
              salary_type: salary_type,
              salary_type_wording: salary_type_wording
            });

            const out = doc.getZip().generate({
              type: "blob",
              mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            });

            saveAs(out, "hop_dong_thu_viec_" + employee + ".docx");
          }
      );
    },

    resetSecurityData() {
      this.create_date = '';
      this.name = '';
      this.partport_number = '';
      this.partport_create_date = '';
      this.partport_address = '';
      this.permanent_address = '';
    },

    resetProbationaryContractsData() {
      this.contract_code = '';
      this.day = '';
      this.month = '';
      this.year = '';
      this.employee = '';
      this.birthdate = '';
      this.education = '';
      this.permanent_residence = '';
      this.address = '';
      this.id_card_number = '';
      this.id_card_date = '';
      this.id_card_address = '';
      this.email = '';
      this.phone = '';
      this.job_title = '';
      this.job_description = '';
      this.contract_period = '';
      this.expiration_date = '';
      this.work_location = '';
      this.probationary_salary = '';
      this.salary_after_probation = '';
      this.meal_allowance = '';
      this.telephone_allowance = '';
      this.costume_allowance = '';
      this.fuel_allowance = '';
      this.rules_compliance_bonus = '';
      this.reward_complete_task = '';
      this.salary_type = '';
      this.salary_type_wording = '';
    }
  }
}
</script>

<style scoped>

</style>