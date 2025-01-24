<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import HomeModernSvelte from '../../../lib/20/solid/home-modern.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: HomeModernSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="HomeModern" />
