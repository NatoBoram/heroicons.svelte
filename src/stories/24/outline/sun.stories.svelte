<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import SunSvelte from '../../../lib/24/outline/sun.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: SunSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Sun" />
