<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FaceFrownSvelte from '../../../lib/20/solid/face-frown.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: FaceFrownSvelte,
		args: { class: '' },
	})
</script>

<Story name="FaceFrown" />
