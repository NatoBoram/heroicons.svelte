<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FaceFrownSvelte from '../../../lib/24/solid/face-frown.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: FaceFrownSvelte,
		args: { class: '' },
	})
</script>

<Story name="FaceFrown" />
