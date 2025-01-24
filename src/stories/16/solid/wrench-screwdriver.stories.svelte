<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import WrenchScrewdriverSvelte from '../../../lib/16/solid/wrench-screwdriver.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: WrenchScrewdriverSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="WrenchScrewdriver" />
