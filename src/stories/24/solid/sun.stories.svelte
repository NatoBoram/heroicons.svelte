<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import SunSvelte from '../../../lib/24/solid/sun.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: SunSvelte,
		args: { class: '' },
	})
</script>

<Story name="Sun" />
