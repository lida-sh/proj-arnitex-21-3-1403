<script setup>

</script>

<template>
  <div class="text-white pb-3">
    <nav>
      <ul class="dashboard-nav-list">
        <li>
          <NuxtLink class="nav-link">
            <div>
              <IconsDashboardSimpleTradeNav></IconsDashboardSimpleTradeNav>
            </div>
            <span class="nav-title">معامله ساده</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="nav-link">
            <div>
              <IconsDashboardComplexTradeNav></IconsDashboardComplexTradeNav>
            </div>
            <span class="nav-title">معامله پیشرفته</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="nav-link">
            <div>
              <IconsDashboardAccrualTradeNav></IconsDashboardAccrualTradeNav>
            </div>
            <span class="nav-title">معامله تعهدی</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="nav-link">
            <div>
              <IconsDashboardCopyTradeNav></IconsDashboardCopyTradeNav>
            </div>
            <span class="nav-title">کپی ترید</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="nav-link">
            <div>
              <IconsDashboardDepositNav></IconsDashboardDepositNav>
            </div>
            <span class="nav-title">واریز</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="nav-link">
            <div>
              <IconsDashboardCopyTradeNav></IconsDashboardCopyTradeNav>
            </div>
            <span class="nav-title">برداشت</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="nav-link">
            <div>
              <IconsDashboardHistoryNav></IconsDashboardHistoryNav>
            </div>
            <span class="nav-title">تاریخچه</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="nav-link">
            <div>
              <IconsDashboardMoreNav></IconsDashboardMoreNav>
            </div>
            <span class="nav-title">بیشتر</span>
          </NuxtLink>
        </li>

      </ul>
    </nav>
  </div>

</template>

<style scoped>
.dashboard-nav-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 12px;
  grid-row-gap: 24px;
}

.nav-title {
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  color: #FFF;
}

.nav-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}
</style>