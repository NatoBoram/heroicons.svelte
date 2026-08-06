<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import SunSvelte from '../../../lib/16/solid/sun.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: SunSvelte,
		args: { class: '' },
	})
</script>

<Story name="Sun" />
