<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import HomeModernSvelte from '../../../lib/24/outline/home-modern.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: HomeModernSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="HomeModern" />
