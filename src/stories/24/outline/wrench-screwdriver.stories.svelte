<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import WrenchScrewdriverSvelte from '../../../lib/24/outline/wrench-screwdriver.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: WrenchScrewdriverSvelte,
		args: { class: '' },
	})
</script>

<Story name="WrenchScrewdriver" />
