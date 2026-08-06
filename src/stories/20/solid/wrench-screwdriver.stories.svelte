<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import WrenchScrewdriverSvelte from '../../../lib/20/solid/wrench-screwdriver.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: WrenchScrewdriverSvelte,
		args: { class: '' },
	})
</script>

<Story name="WrenchScrewdriver" />
