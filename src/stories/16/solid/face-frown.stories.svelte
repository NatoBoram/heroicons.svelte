<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FaceFrownSvelte from '../../../lib/16/solid/face-frown.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: FaceFrownSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="FaceFrown" />
