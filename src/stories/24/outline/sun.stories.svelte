<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import SunSvelte from '../../../lib/24/outline/sun.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: SunSvelte,
		args: { class: '' },
	})
</script>

<Story name="Sun" />
