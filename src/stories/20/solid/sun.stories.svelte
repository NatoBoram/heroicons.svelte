<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import SunSvelte from '../../../lib/20/solid/sun.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: SunSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Sun" />
