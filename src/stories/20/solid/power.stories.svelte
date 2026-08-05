<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PowerSvelte from '../../../lib/20/solid/power.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: PowerSvelte,
		args: { class: '' },
	})
</script>

<Story name="Power" />
