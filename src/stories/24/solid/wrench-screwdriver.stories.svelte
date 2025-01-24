<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import WrenchScrewdriverSvelte from '../../../lib/24/solid/wrench-screwdriver.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: WrenchScrewdriverSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="WrenchScrewdriver" />
